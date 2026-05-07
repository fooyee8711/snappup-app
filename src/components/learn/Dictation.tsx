import React, { useState, useEffect, useRef } from 'react';
import { WordEntry } from '../../data/words';
import { Volume2 } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  word: WordEntry;
  onNext: () => void;
}

export const Dictation: React.FC<Props> = ({ word, onNext }) => {
  const [input, setInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const playAudio = () => {
    const utterance = new SpeechSynthesisUtterance(word.word);
    utterance.lang = 'en-GB';
    utterance.rate = 0.85; // Slightly slower for better clarity
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    const timer = setTimeout(playAudio, 500);
    if (inputRef.current) {
      inputRef.current.focus();
    }
    return () => clearTimeout(timer);
  }, [word]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim().toLowerCase() === word.word.toLowerCase()) {
      setIsCorrect(true);
      const audio = new Audio('https://cdn.pixabay.com/audio/2021/08/04/audio_06d962776c.mp3');
      audio.volume = 0.5;
      audio.play().catch(e => console.log('Audio play failed:', e));
      setTimeout(onNext, 1500);
    } else {
      setIsShaking(true);
      setShowHint(true);
      const audio = new Audio('https://cdn.pixabay.com/audio/2022/03/24/audio_730240d426.mp3');
      audio.volume = 0.3;
      audio.play().catch(e => console.log('Audio play failed:', e));
      playAudio();
      setTimeout(() => setIsShaking(false), 500);
      setInput('');
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-4 mt-4">
        <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-2">
          👂 EAR POWER TEST
        </div>
        <h3 className="text-4xl font-black text-stone-800 tracking-tight leading-none">
          Ghost Dictation
        </h3>
        <p className="text-stone-500 font-bold">Listen to the dog's secret word...</p>
      </div>

      <div className="relative group">
        <div className="absolute -inset-4 bg-indigo-100/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <button 
          onClick={playAudio}
          className="relative p-10 bg-white border-4 border-indigo-200 text-indigo-500 rounded-full hover:border-indigo-400 hover:text-indigo-600 hover:scale-105 transition-all active:scale-95 shadow-xl group"
        >
          <Volume2 size={56} strokeWidth={2.5} />
          <div className="absolute -bottom-2 right-0 bg-indigo-600 text-white p-2 rounded-full shadow-lg border-2 border-white group-hover:animate-bounce">
            <span className="text-sm">🐶</span>
          </div>
        </button>
      </div>

      <form 
        onSubmit={handleSubmit} 
        className={clsx(
          "w-full max-w-md space-y-8 transition-all duration-300",
          isShaking && "animate-shake"
        )}
      >
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value.toLowerCase())}
            className={clsx(
              "w-full text-center text-5xl font-black p-8 bg-white border-4 rounded-[2.5rem] focus:outline-none transition-all shadow-inner tracking-tight",
              isCorrect ? "border-emerald-200 text-emerald-500 bg-emerald-50" : "border-indigo-100 text-indigo-900 focus:border-indigo-400"
            )}
            placeholder="???"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
          />
          
          {input.length > 0 && !isCorrect && (
            <button
              type="button"
              onClick={playAudio}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-indigo-300 hover:text-indigo-500 transition-colors"
            >
              <Volume2 size={24} />
            </button>
          )}
        </div>

        <div className="min-h-[60px] flex items-center justify-center">
          {showHint && !isCorrect && (
            <div className="text-center animate-in slide-in-from-top-2 duration-300">
              <span className="px-4 py-2 bg-rose-50 text-rose-500 rounded-2xl text-sm font-black border-2 border-rose-100 inline-flex items-center gap-2">
                <span>💨</span> Oops! The Ghost Dog was faster. Try again!
              </span>
            </div>
          )}

          {isCorrect && (
            <div className="text-center space-y-1 animate-in zoom-in duration-300">
              <div className="text-4xl font-black text-emerald-500 flex items-center justify-center gap-2">
                <span>🍖</span> SPOTLESS!
              </div>
              <p className="text-emerald-600 font-bold text-sm tracking-widest uppercase">Overcoming the Ghost</p>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={!input || isCorrect}
          className={clsx(
            "w-full py-5 rounded-[2rem] text-2xl font-black transition-all shadow-xl hover:-translate-y-1 active:scale-95 disabled:opacity-0 disabled:pointer-events-none",
            "bg-indigo-600 text-white hover:bg-indigo-700"
          )}
        >
          CHECK SPELLING 🦴
        </button>
      </form>

      {/* Speed Dog Background Deco */}
      <div className="fixed bottom-4 left-4 opacity-5 pointer-events-none -rotate-12">
        <Volume2 size={120} />
      </div>
    </div>
  );
};
