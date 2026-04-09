import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../store/progress';
import { WordEntry } from '../data/words';

export const ManageWords: React.FC = () => {
  const navigate = useNavigate();
  const { addCustomWord } = useProgress();

  const [word, setWord] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!word) return;

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/generate-word', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ word })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || 'Failed to generate word');
      }

      const data = await response.json();

      const newWord: WordEntry = {
        id: `custom-${Date.now()}`,
        word: word.toLowerCase(),
        morphology: {
          prefix: data.morphology.prefix || undefined,
          root: data.morphology.root,
          suffix: data.morphology.suffix || undefined,
        },
        meaning: data.meaning,
        exampleSentence: data.exampleSentence,
        story: data.story,
        relatedWords: [], // Custom words can skip the root explorer
        category: 'Custom Practice'
      };

      addCustomWord(newWord);
      setSuccess(`Successfully taught the trick: ${word}!`);
      setWord('');
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Failed to generate word data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col pt-12 pb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-4xl font-black text-amber-600 tracking-tight drop-shadow-sm">Teach a New Trick</h2>
        <p className="text-stone-500 font-bold text-lg">Enter a word and AI will generate the rest!</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-[2rem] shadow-sm border-2 border-amber-100">
        <div className="space-y-4">
          <div>
            <label className="block text-lg font-bold text-stone-700 mb-2">Target Word *</label>
            <input 
              required 
              type="text" 
              value={word} 
              onChange={e => setWord(e.target.value)} 
              disabled={loading}
              className="w-full p-4 text-xl font-bold text-stone-800 bg-amber-50 border-4 border-amber-100 rounded-2xl focus:outline-none focus:border-amber-400 focus:ring-0 transition-all placeholder:text-amber-300 placeholder:font-medium" 
              placeholder="e.g. unhelpful" 
            />
          </div>
        </div>

        {error && (
          <div className="text-red-700 text-sm font-bold text-center bg-red-100 p-4 rounded-2xl border-2 border-red-200">
            {error}
          </div>
        )}

        {success && (
          <div className="text-emerald-700 text-sm font-bold text-center bg-emerald-100 p-4 rounded-2xl border-2 border-emerald-200">
            {success}
          </div>
        )}

        <button 
          type="submit" 
          disabled={loading || !word}
          className="w-full py-4 bg-amber-500 text-white rounded-2xl text-xl font-bold hover:bg-amber-600 transition-all active:scale-95 shadow-md hover:shadow-lg hover:-translate-y-1 mt-4 disabled:opacity-50 disabled:active:scale-100 disabled:hover:-translate-y-0 disabled:hover:shadow-none flex justify-center items-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
              Generating...
            </>
          ) : (
            '+ Teach'
          )}
        </button>
      </form>

      <button
        onClick={() => navigate('/')}
        className="mt-6 w-full py-4 bg-stone-100 text-stone-600 rounded-2xl text-xl font-bold hover:bg-stone-200 transition-all active:scale-95 shadow-sm"
      >
        Done & Go Back
      </button>
    </div>
  );
};
