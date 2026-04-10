import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../store/progress';
import { WordEntry } from '../data/words';

export const ManageWords: React.FC = () => {
  const navigate = useNavigate();
  const { addCustomWord } = useProgress();

  const [wordsInput, setWordsInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentWord, setCurrentWord] = useState('');
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [results, setResults] = useState<{ word: string; status: 'success' | 'error'; message?: string }[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const words = wordsInput
      .split(/[\n,]+/)
      .map(w => w.trim())
      .filter(w => w.length > 0);

    if (words.length === 0) return;

    setLoading(true);
    setResults([]);
    setProgress({ current: 0, total: words.length });

    for (let i = 0; i < words.length; i++) {
      const targetWord = words[i];
      setCurrentWord(targetWord);
      setProgress(prev => ({ ...prev, current: i + 1 }));

      let attempts = 0;
      const maxAttempts = 3;
      let success = false;

      while (attempts < maxAttempts && !success) {
        try {
          const response = await fetch('/api/generate-word', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ word: targetWord })
          });

          if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            const errorMsg = errData.error || 'Failed to generate word';
            
            // If it's a temporary error (503 or 429), wait and retry
            if (response.status === 503 || response.status === 429 || errorMsg.toLowerCase().includes('quota') || errorMsg.toLowerCase().includes('demand')) {
              attempts++;
              if (attempts < maxAttempts) {
                setCurrentWord(`${targetWord} (Retry ${attempts}/${maxAttempts-1}...)`);
                await new Promise(resolve => setTimeout(resolve, 10000)); // Wait 10s for retry
                continue;
              }
            }
            throw new Error(errorMsg);
          }

          const data = await response.json();

          const newWord: WordEntry = {
            id: `custom-${Date.now()}-${i}`,
            word: targetWord.toLowerCase(),
            morphology: {
              prefix: data.morphology.prefix || undefined,
              root: data.morphology.root,
              suffix: data.morphology.suffix || undefined,
            },
            meaning: data.meaning,
            exampleSentence: data.exampleSentence,
            story: data.story,
            relatedWords: [],
            category: 'Custom Practice'
          };

          addCustomWord(newWord);
          setResults(prev => [...prev, { word: targetWord, status: 'success' }]);
          success = true;
        } catch (err) {
          if (attempts >= maxAttempts - 1 || success) {
            console.error(err);
            const errMsg = err instanceof Error ? err.message : 'Failed to generate word';
            setResults(prev => [...prev, { 
              word: targetWord, 
              status: 'error', 
              message: errMsg
            }]);
            break;
          }
          attempts++;
        }
      }
      
      // Base delay between different words to stay under 15 RPM
      if (i < words.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 4000));
      }
    }

    setLoading(false);
    setWordsInput('');
    setCurrentWord('');
  };

  const successCount = results.filter(r => r.status === 'success').length;
  const errorCount = results.filter(r => r.status === 'error').length;

  return (
    <div className="flex-1 flex flex-col pt-12 pb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-4xl font-black text-amber-600 tracking-tight drop-shadow-sm">Teach New Tricks</h2>
        <p className="text-stone-500 font-bold text-lg">Enter multiple words and AI will generate the rest!</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-[2rem] shadow-sm border-2 border-amber-100">
        <div className="space-y-4">
          <div>
            <label className="block text-lg font-bold text-stone-700 mb-2">Target Words *</label>
            <textarea 
              required 
              rows={5}
              value={wordsInput} 
              onChange={e => setWordsInput(e.target.value)} 
              disabled={loading}
              className="w-full p-4 text-xl font-bold text-stone-800 bg-amber-50 border-4 border-amber-100 rounded-2xl focus:outline-none focus:border-amber-400 focus:ring-0 transition-all placeholder:text-amber-300 placeholder:font-medium resize-none" 
              placeholder="Enter words separated by new lines or commas..." 
            />
            <p className="text-stone-400 text-sm mt-2 font-medium">Tip: You can paste a list of words here.</p>
          </div>
        </div>

        {loading && (
          <div className="space-y-3">
            <div className="flex justify-between items-center text-amber-600 font-black">
              <span>Processing: {currentWord}</span>
              <span>{progress.current} / {progress.total}</span>
            </div>
            <div className="w-full bg-amber-100 h-4 rounded-full overflow-hidden">
              <div 
                className="bg-amber-500 h-full transition-all duration-500" 
                style={{ width: `${(progress.current / progress.total) * 100}%` }}
              />
            </div>
          </div>
        )}

        {results.length > 0 && !loading && (
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1 bg-emerald-50 border-2 border-emerald-100 p-3 rounded-xl text-center">
                <div className="text-2xl font-black text-emerald-600">{successCount}</div>
                <div className="text-xs font-bold text-emerald-500 uppercase">Success</div>
              </div>
              <div className="flex-1 bg-red-50 border-2 border-red-100 p-3 rounded-xl text-center">
                <div className="text-2xl font-black text-red-600">{errorCount}</div>
                <div className="text-xs font-bold text-red-500 uppercase">Errors</div>
              </div>
            </div>

            <div className="max-h-40 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
              {results.map((res, idx) => (
                <div 
                  key={idx} 
                  className={`flex justify-between items-center p-3 rounded-xl border-2 ${
                    res.status === 'success' ? 'bg-emerald-50 border-emerald-100' : 'bg-red-50 border-red-100'
                  }`}
                >
                  <span className="font-bold text-stone-700">{res.word}</span>
                  {res.status === 'success' ? (
                    <span className="text-emerald-600 text-xs font-black uppercase">Added</span>
                  ) : (
                    <span className="text-red-500 text-[10px] font-bold max-w-[150px] truncate" title={res.message}>
                      {res.message}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <button 
          type="submit" 
          disabled={loading || !wordsInput.trim()}
          className="w-full py-4 bg-amber-500 text-white rounded-2xl text-xl font-bold hover:bg-amber-600 transition-all active:scale-95 shadow-md hover:shadow-lg hover:-translate-y-1 mt-4 disabled:opacity-50 disabled:active:scale-100 disabled:hover:-translate-y-0 disabled:hover:shadow-none flex justify-center items-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
              Teaching Tricks...
            </>
          ) : (
            '+ Teach All'
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
