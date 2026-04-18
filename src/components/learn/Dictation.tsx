import React, { useState, useEffect, useRef } from 'react';
import { WordEntry } from '../../data/words';
import { Volume2 } from 'lucide-react';

interface Props {
  word: WordEntry;
  onNext: () => void;
}

export const Dictation: React.FC<Props> = ({ word, onNext }) => {
  const [input, setInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const playAudio = () => {
    const utterance = new SpeechSynthesisUtterance(word.word);
    utterance.lang = 'en-GB';
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    playAudio();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [word]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase() === word.word.toLowerCase()) {
      setIsCorrect(true);
      setTimeout(onNext, 1500);
    } else {
      setShowHint(true);
      playAudio();
      setInput('');
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-2 mt-8">
        <h3 className="text-3xl font-black text-indigo-800 tracking-tight flex items-center justify-center gap-3">
          🏫 Dictation Time
        </h3>
        <p className="text-stone-500 font-bold text-lg italic">Listen carefully and spell the word</p>
      </div>

      <div className="flex justify-center">
        <button 
          onClick={playAudio}
          className="p-8 bg-indigo-100 text-indigo-600 rounded-full hover:bg-indigo-200 transition-all active:scale-95 shadow-sm border-4 border-indigo-200"
        >
          <Volume2 size={48} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="w-full space-y-8">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value.toLowerCase())}
          className="w-full text-center text-4xl font-bold p-6 bg-white border-4 border-indigo-100 rounded-3xl focus:outline-none focus:border-indigo-400 focus:ring-0 transition-all placeholder:text-indigo-200"
          placeholder="???"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
        />

        {showHint && !isCorrect && (
          <div className="text-center space-y-2 animate-in shake transition-all bg-red-50 p-4 rounded-2xl border-2 border-red-100">
            <p className="text-sm text-red-500 font-bold uppercase tracking-wider">Try again! Listen once more.</p>
          </div>
        )}

        {isCorrect && (
          <div className="text-center text-3xl font-black text-emerald-500 animate-bounce">
            Spotless! ✨
          </div>
        )}

        <button
          type="submit"
          disabled={!input}
          className="w-full py-4 bg-indigo-600 text-white rounded-2xl text-xl font-bold hover:bg-indigo-700 transition-all active:scale-95 shadow-md hover:shadow-lg hover:-translate-y-1 mt-auto disabled:opacity-50"
        >
          Check
        </button>
      </form>
    </div>
  );
};
