import React, { useState } from 'react';
import { WordEntry } from '../../data/words';
import clsx from 'clsx';

interface Props {
  word: WordEntry;
  onNext: () => void;
}

export const RootExplorer: React.FC<Props> = ({ word, onNext }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (rw: { word: string; meaning: string }) => {
    // Play audio
    const utterance = new SpeechSynthesisUtterance(`${rw.word}. ${rw.meaning}`);
    utterance.lang = 'en-GB';
    window.speechSynthesis.speak(utterance);

    if (selected.includes(rw.word)) {
      setSelected(selected.filter(item => item !== rw.word));
    } else {
      setSelected([...selected, rw.word]);
    }
  };

  const isComplete = selected.length >= 2;

  return (
    <div className="flex-1 flex flex-col items-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-2 mt-8">
        <h3 className="text-3xl font-black text-stone-800 tracking-tight">Root Explorer</h3>
        <p className="text-stone-500 font-bold text-lg">
          Select at least 2 words that share the root <span className="font-bold text-stone-900">"{word.morphology.root}"</span>
        </p>
      </div>

      <div className="w-full space-y-4">
        {word.relatedWords.map((rw) => (
          <button
            key={rw.word}
            onClick={() => handleSelect(rw)}
            className={clsx(
              "w-full p-6 rounded-3xl text-left transition-all border-4 active:scale-95 shadow-sm hover:shadow-md",
              selected.includes(rw.word)
                ? "bg-amber-100 border-amber-400"
                : "bg-white border-amber-100 hover:border-amber-200 hover:-translate-y-1"
            )}
          >
            <p className="font-bold text-xl text-stone-800">{rw.word}</p>
            <p className="text-base font-medium text-stone-500 mt-1">{rw.meaning}</p>
          </button>
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={!isComplete}
        className="w-full py-4 bg-amber-500 text-white rounded-2xl text-xl font-bold hover:bg-amber-600 transition-all active:scale-95 shadow-md hover:shadow-lg hover:-translate-y-1 mt-auto disabled:opacity-50 disabled:active:scale-100 disabled:hover:-translate-y-0 disabled:hover:shadow-none"
      >
        Continue
      </button>
    </div>
  );
};
