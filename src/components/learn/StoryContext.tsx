import React from 'react';
import { WordEntry } from '../../data/words';

interface Props {
  word: WordEntry;
  onNext: () => void;
}

export const StoryContext: React.FC<Props> = ({ word, onNext }) => {
  const renderText = (text: string) => {
    if (!text) return null;
    // Handle **word** bolding from NotebookLM or split by word
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <span key={i} className="font-bold text-amber-600">{part.slice(2, -2)}</span>;
      }
      
      // Also handle normal word bolding if no ** marks
      const subParts = part.split(new RegExp(`(${word.word})`, 'gi'));
      return subParts.map((subPart, j) => {
        if (subPart.toLowerCase() === word.word.toLowerCase()) {
          return <span key={`${i}-${j}`} className="font-bold text-amber-600">{subPart}</span>;
        }
        return <span key={`${i}-${j}`}>{subPart}</span>;
      });
    });
  };

  return (
    <div className="flex-1 flex flex-col items-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-2 mt-4">
        <h3 className="text-3xl font-black text-stone-800 tracking-tight">
          {word.bookSentence ? 'Book Quote' : 'Story Time'}
        </h3>
        <p className="text-stone-500 font-bold text-lg">See how it's used</p>
      </div>

      <div className="space-y-4 w-full">
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border-2 border-amber-100 leading-relaxed text-xl text-stone-700 font-medium">
          {renderText(word.bookSentence || word.story)}
        </div>

        {word.magicUsage && (
          <div className="bg-blue-50 p-6 rounded-[2rem] border-2 border-blue-100 space-y-2">
            <p className="text-xs font-black text-blue-400 uppercase tracking-widest">✨ Magic Usage</p>
            <p className="text-blue-800 font-bold leading-relaxed">
              {word.magicUsage}
            </p>
          </div>
        )}
      </div>

      <button
        onClick={onNext}
        className="w-full py-4 bg-amber-500 text-white rounded-2xl text-xl font-bold hover:bg-amber-600 transition-all active:scale-95 shadow-md hover:shadow-lg hover:-translate-y-1 mt-auto"
      >
        Continue
      </button>
    </div>
  );
};
