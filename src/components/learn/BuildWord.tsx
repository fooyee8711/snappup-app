import React, { useState, useEffect } from 'react';
import { WordEntry } from '../../data/words';
import clsx from 'clsx';

interface Props {
  word: WordEntry;
  onNext: () => void;
}

export const BuildWord: React.FC<Props> = ({ word, onNext }) => {
  const [selectedParts, setSelectedParts] = useState<string[]>([]);
  const [availableParts, setAvailableParts] = useState<{ id: string; text: string; type: string }[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [error, setError] = useState(false);

  const expectedLength = (word.morphology.prefix ? 1 : 0) + 1 + (word.morphology.suffix ? 1 : 0);

  useEffect(() => {
    const parts = [];
    if (word.morphology.prefix) parts.push({ id: 'p', text: word.morphology.prefix, type: 'prefix' });
    parts.push({ id: 'r', text: word.morphology.root, type: 'root' });
    if (word.morphology.suffix) parts.push({ id: 's', text: word.morphology.suffix, type: 'suffix' });
    
    // Add some distractors
    const distractors = ['tion', 'un', 'pre', 'ment', 'ly', 'dis'].filter(
      d => d !== word.morphology.prefix && d !== word.morphology.suffix
    ).slice(0, 2);
    
    distractors.forEach((d, i) => {
      parts.push({ id: `d${i}`, text: d, type: 'distractor' });
    });

    // Shuffle
    setAvailableParts(parts.sort(() => Math.random() - 0.5));
  }, [word]);

  useEffect(() => {
    if (selectedParts.length === expectedLength) {
      const expectedSequence = [];
      if (word.morphology.prefix) expectedSequence.push('p');
      expectedSequence.push('r');
      if (word.morphology.suffix) expectedSequence.push('s');
      
      const isMatch = selectedParts.every((id, index) => id === expectedSequence[index]);

      if (isMatch) {
        setIsCorrect(true);
        setError(false);
        setTimeout(onNext, 1500);
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
          setSelectedParts([]);
        }, 1500);
      }
    }
  }, [selectedParts, word.morphology, onNext, expectedLength]);

  const handlePartClick = (id: string) => {
    if (selectedParts.includes(id)) {
      setSelectedParts(selectedParts.filter(p => p !== id));
    } else {
      setSelectedParts([...selectedParts, id]);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-2 mt-8">
        <h3 className="text-3xl font-black text-stone-800 tracking-tight">Build the word</h3>
        <p className="text-stone-500 font-bold text-lg">Tap the parts in the correct order</p>
      </div>

      <div className="flex gap-2 min-h-[5rem] items-center justify-center w-full bg-white rounded-3xl p-6 border-4 border-dashed border-amber-200">
        {selectedParts.map(id => {
          const part = availableParts.find(p => p.id === id);
          if (!part) return null;
          return (
            <span
              key={id}
              onClick={() => handlePartClick(id)}
              className={clsx(
                "px-5 py-3 rounded-2xl text-2xl font-bold cursor-pointer transition-all active:scale-90 shadow-sm hover:-translate-y-1 hover:shadow-md",
                part.type === 'prefix' ? "bg-teal-100 text-teal-700" :
                part.type === 'root' ? "bg-stone-100 text-stone-800" :
                part.type === 'suffix' ? "bg-rose-100 text-rose-700" :
                "bg-amber-100 text-amber-700"
              )}
            >
              {part.text}
            </span>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {availableParts.map(part => {
          if (selectedParts.includes(part.id)) return null;
          return (
            <button
              key={part.id}
              onClick={() => handlePartClick(part.id)}
              className="px-6 py-4 bg-white text-stone-700 rounded-2xl text-xl font-bold hover:bg-stone-50 transition-all active:scale-95 shadow-sm border-2 border-stone-200 hover:border-stone-300 hover:-translate-y-1 hover:shadow-md"
            >
              {part.text}
            </button>
          );
        })}
      </div>

      {isCorrect && (
        <div className="mt-8 text-2xl font-bold text-green-500 animate-bounce">
          Spot on!
        </div>
      )}
      {error && (
        <div className="mt-8 text-2xl font-bold text-red-500 animate-bounce">
          Try again!
        </div>
      )}
    </div>
  );
};
