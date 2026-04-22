import React, { useState, useEffect, useRef } from 'react';
import { WordEntry } from '../../data/words';
import { Volume2 } from 'lucide-react';

interface Props {
  word: WordEntry;
  onNext: () => void;
}

export const Spelling: React.FC<Props> = ({ word, onNext }) => {
  const [input, setInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const playAudio = () => {
    const utterance = new SpeechSynthesisUtterance(word.word);
    utterance.lang = 'en-GB';
    utterance.rate = 0.9; // Slightly slower for clarity
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
      // Play success sound
      const audio = new Audio('https://cdn.pixabay.com/audio/2021/08/04/audio_06d962776c.mp3');
      audio.volume = 0.5;
      audio.play().catch(e => console.log('Audio play failed:', e));
      setTimeout(onNext, 1500);
    } else {
      setShowHint(true);
      // Play error sound
      const audio = new Audio('https://cdn.pixabay.com/audio/2022/03/24/audio_730240d426.mp3');
      audio.volume = 0.3;
      audio.play().catch(e => console.log('Audio play failed:', e));
      setInput('');
      playAudio(); // Re-read the word on error
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-4 mt-8">
        <h3 className="text-3xl font-black text-stone-800 tracking-tight">Spell it</h3>
        <p className="text-stone-500 font-bold text-lg">Type the word you just learned</p>
        
        <button 
          type="button"
          onClick={playAudio}
          className="mx-auto flex items-center justify-center gap-2 px-6 py-2 bg-amber-100 text-amber-700 rounded-full hover:bg-amber-200 transition-all active:scale-95 border-2 border-amber-200 font-black text-sm"
        >
          <Volume2 size={20} /> Listen Again
        </button>
      </div>

      <form onSubmit={handleSubmit} className="w-full space-y-8">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value.toLowerCase())}
          className="w-full text-center text-4xl font-bold p-6 bg-white border-4 border-amber-100 rounded-3xl focus:outline-none focus:border-amber-400 focus:ring-0 transition-all placeholder:text-amber-200"
          placeholder="Type here..."
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
        />

        {showHint && !isCorrect && (
          <div className="text-center space-y-2 animate-in fade-in bg-red-50 p-4 rounded-2xl border-2 border-red-100">
            <p className="text-sm text-red-500 font-bold uppercase tracking-wider">Not quite! Here's a hint:</p>
            <div className="flex justify-center gap-1 text-2xl font-bold">
              {word.morphology.prefix && <span className="text-teal-600">{word.morphology.prefix}</span>}
              <span className="text-stone-800">{word.morphology.root}</span>
              {word.morphology.suffix && <span className="text-rose-600">{word.morphology.suffix}</span>}
            </div>
          </div>
        )}

        {isCorrect && (
          <div className="text-center text-2xl font-bold text-emerald-500 animate-bounce">
            Perfect!
          </div>
        )}

        <button
          type="submit"
          disabled={!input}
          className="w-full py-4 bg-amber-500 text-white rounded-2xl text-xl font-bold hover:bg-amber-600 transition-all active:scale-95 shadow-md hover:shadow-lg hover:-translate-y-1 mt-auto disabled:opacity-50 disabled:active:scale-100 disabled:hover:-translate-y-0 disabled:hover:shadow-none"
        >
          Check
        </button>
      </form>
    </div>
  );
};
