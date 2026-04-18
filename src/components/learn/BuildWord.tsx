import React, { useState, useEffect } from 'react';
import { WordEntry } from '../../data/words';
import clsx from 'clsx';

interface Props {
  word: WordEntry;
  onNext: () => void;
}

export const BuildWord: React.FC<Props> = ({ word, onNext }) => {
  const [selectedParts, setSelectedParts] = useState<string[]>([]);
  const [availableParts, setAvailableParts] = useState<{ id: string; text: string; type: string; color?: string }[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [error, setError] = useState(false);

  // Helper to parse decorated word into chunks with color info
  const getPhonicsChunks = (decorated: string) => {
    const parts = decorated.split(/(\[.*?\])/);
    const chunks: { text: string; color?: string }[] = [];
    let currentColor = "";

    parts.forEach(part => {
      if (part.startsWith('[') && part.endsWith(']')) {
        if (part.startsWith('[/')) {
          currentColor = "";
        } else {
          currentColor = part.slice(1, -1);
        }
      } else if (part) {
        chunks.push({ text: part, color: currentColor || undefined });
      }
    });
    return chunks;
  };

  useEffect(() => {
    const parts: { id: string; text: string; type: string; color?: string }[] = [];
    
    if (word.decoratedWord) {
      // Logic for phonics chunks
      const chunks = getPhonicsChunks(word.decoratedWord);
      chunks.forEach((chunk, i) => {
        parts.push({ id: `c${i}`, text: chunk.text, type: 'chunk', color: chunk.color });
      });
    } else {
      // Logic for morphology
      if (word.morphology.prefix) parts.push({ id: 'p', text: word.morphology.prefix, type: 'prefix' });
      parts.push({ id: 'r', text: word.morphology.root, type: 'root' });
      if (word.morphology.suffix) parts.push({ id: 's', text: word.morphology.suffix, type: 'suffix' });
    }
    
    // Add distractors
    const commonDistractors = ['tion', 'un', 'pre', 'ment', 'ly', 'dis', 'er', 'ing', 'est', 'ed'];
    const distractors = commonDistractors
      .filter(d => !parts.some(p => p.text === d))
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);
    
    distractors.forEach((d, i) => {
      parts.push({ id: `d${i}`, text: d, type: 'distractor' });
    });

    // Shuffle
    setAvailableParts(parts.sort(() => Math.random() - 0.5));
  }, [word]);

  const expectedLength = availableParts.filter(p => p.type !== 'distractor').length;

  useEffect(() => {
    if (expectedLength > 0 && selectedParts.length === expectedLength) {
      const expectedSequence: string[] = [];
      
      if (word.decoratedWord) {
        const chunks = getPhonicsChunks(word.decoratedWord);
        chunks.forEach((_, i) => expectedSequence.push(`c${i}`));
      } else {
        if (word.morphology.prefix) expectedSequence.push('p');
        expectedSequence.push('r');
        if (word.morphology.suffix) expectedSequence.push('s');
      }
      
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
  }, [selectedParts, word, onNext, expectedLength]);

  const handlePartClick = (id: string) => {
    if (selectedParts.includes(id)) {
      setSelectedParts(selectedParts.filter(p => p !== id));
    } else {
      setSelectedParts([...selectedParts, id]);
    }
  };

  const getColorClass = (color?: string) => {
    const colorMap: Record<string, string> = {
      red: 'text-red-500',
      blue: 'text-blue-500',
      skyblue: 'text-sky-400',
      purple: 'text-purple-500',
      green: 'text-emerald-500',
      orange: 'text-orange-500',
    };
    return color ? colorMap[color] : 'text-stone-800';
  };

  const getBgClass = (type: string, color?: string) => {
    if (color) {
      const bgMap: Record<string, string> = {
        red: 'bg-red-50',
        blue: 'bg-blue-50',
        skyblue: 'bg-sky-50',
        purple: 'bg-purple-50',
        green: 'bg-emerald-50',
        orange: 'bg-orange-50',
      };
      return bgMap[color] || 'bg-stone-50';
    }
    
    switch (type) {
      case 'prefix': return 'bg-teal-50 text-teal-700 border-teal-100';
      case 'root': return 'bg-stone-50 text-stone-800 border-stone-100';
      case 'suffix': return 'bg-rose-50 text-rose-700 border-rose-100';
      default: return 'bg-amber-50 text-amber-700 border-amber-100';
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
                "px-5 py-3 rounded-2xl text-2xl font-black cursor-pointer transition-all active:scale-90 shadow-sm hover:-translate-y-1 hover:shadow-md border-2",
                getBgClass(part.type, part.color),
                part.color && getColorClass(part.color)
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
              className={clsx(
                "px-6 py-4 bg-white rounded-2xl text-xl font-bold hover:bg-stone-50 transition-all active:scale-95 shadow-sm border-2 hover:border-stone-300 hover:-translate-y-1 hover:shadow-md",
                part.color ? getColorClass(part.color) : "text-stone-700 border-stone-200"
              )}
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
