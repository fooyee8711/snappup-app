import React, { useState, useEffect, useRef } from 'react';
import { WordEntry } from '../../data/words';
import { Volume2 } from 'lucide-react';
import { useProgress } from '../../store/progress';

interface Props {
  word: WordEntry;
  onNext: () => void;
}

export const Dictation: React.FC<Props> = ({ word, onNext }) => {
  const { removeMasteredWord, incrementMistake } = useProgress();
  const [input, setInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [demoted, setDemoted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const playAudio = () => {
    const utterance = new SpeechSynthesisUtterance(word.word);
    utterance.lang = 'en-GB';
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    setInput('');
    setIsCorrect(false);
    setShowHint(false);
    setMistakes(0);
    setDemoted(false);
    playAudio();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [word]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (demoted || isCorrect) return;

    if (input.toLowerCase() === word.word.toLowerCase()) {
      setIsCorrect(true);
      setTimeout(onNext, 1500);
    } else {
      incrementMistake(word.id);
      const newMistakes = mistakes + 1;
      setMistakes(newMistakes);
      setShowHint(true);
      setInput('');
      playAudio();

      if (newMistakes >= 3) {
        setDemoted(true);
        removeMasteredWord(word.id);
        setTimeout(onNext, 2500);
      }
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-2 mt-8">
        <h3 className="text-3xl font-black text-stone-800 tracking-tight">Dictation</h3>
        <p className="text-stone-500 font-bold text-lg">Listen and type</p>
      </div>

      <button
        onClick={playAudio}
        className="p-8 bg-amber-100 text-amber-600 rounded-full hover:bg-amber-200 transition-all active:scale-90 shadow-sm hover:shadow-md hover:-translate-y-1"
      >
        <Volume2 size={56} strokeWidth={2.5} />
      </button>

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

        {demoted && (
          <div className="text-center text-xl font-bold text-orange-500 animate-bounce bg-orange-50 p-4 rounded-2xl border-2 border-orange-200">
            Let's learn this word again later!
          </div>
        )}

        {showHint && !isCorrect && !demoted && (
          <div className="text-center space-y-2 animate-in fade-in bg-red-50 p-4 rounded-2xl border-2 border-red-100">
            <p className="text-sm text-red-500 font-bold uppercase tracking-wider">Listen carefully and try again!</p>
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
