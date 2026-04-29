import React, { useState, useEffect, useRef } from 'react';
import { WordEntry } from '../../data/words';
import { useProgress } from '../../store/progress';
import { Volume2 } from 'lucide-react';

interface Props {
  word: WordEntry;
  onNext: () => void;
}

export const FillInBlanks: React.FC<Props> = ({ word, onNext }) => {
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { incrementMistake } = useProgress();

  const playAudio = () => {
    const utterance = new SpeechSynthesisUtterance(word.word);
    utterance.lang = 'en-GB';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    // playAudio(); // Removed automatic playback as per user request
  }, [word]);

  const sentence = word.bookSentence || word.exampleSentence || word.story;

  const parts = sentence.split(new RegExp(`(${word.word})`, 'gi'));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim().toLowerCase() === word.word.toLowerCase()) {
      setIsSuccess(true);
      // Play success sound
      const audio = new Audio('https://cdn.pixabay.com/audio/2021/08/04/audio_06d962776c.mp3');
      audio.volume = 0.5;
      audio.play().catch(e => console.log('Audio play failed:', e));
      setTimeout(onNext, 1000);
    } else {
      setIsError(true);
      // Play error sound
      const audio = new Audio('https://cdn.pixabay.com/audio/2022/03/24/audio_730240d426.mp3');
      audio.volume = 0.3;
      audio.play().catch(e => console.log('Audio play failed:', e));
      incrementMistake(word.id);
      setTimeout(() => setIsError(false), 1000);
      setValue('');
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-4 mt-4">
        <h3 className="text-3xl font-black text-stone-800 tracking-tight">Fill in the Blanks</h3>
        <p className="text-stone-500 font-bold text-lg">Complete the sentence</p>
        
        <button 
          type="button"
          onClick={playAudio}
          className="mx-auto flex items-center justify-center gap-2 px-6 py-2 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-all active:scale-95 border-2 border-indigo-100 font-black text-sm"
        >
          <Volume2 size={20} /> Listen
        </button>
      </div>

      <div className="w-full bg-white p-8 rounded-[2rem] shadow-sm border-2 border-indigo-100 min-h-[160px] flex items-center justify-center">
        <div className="leading-loose text-2xl text-stone-700 font-medium text-center">
          {parts.map((part, i) => (
            <span key={i}>
              {part.toLowerCase() === word.word.toLowerCase() ? (
                <span className="inline-block border-b-4 border-indigo-200 min-w-[120px] text-indigo-600 font-black px-2 mx-1">
                  {isSuccess ? word.word : '______'}
                </span>
              ) : (
                part
              )}
            </span>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type the missing word..."
          className={`w-full p-4 text-2xl font-black text-center border-4 rounded-2xl outline-none transition-all ${
            isError ? 'bg-red-50 border-red-400 shake animate-shake' : 
            isSuccess ? 'bg-emerald-50 border-emerald-400' :
            'bg-stone-50 border-stone-100 focus:border-indigo-400'
          }`}
          autoFocus
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
        
        <button
          type="submit"
          className="w-full py-4 bg-indigo-500 text-white rounded-2xl text-xl font-bold hover:bg-indigo-600 transition-all active:scale-95 shadow-md shadow-indigo-100"
        >
          Check Answer
        </button>
      </form>
    </div>
  );
};
