import React from 'react';

interface Props {
  decoratedWord: string;
  className?: string;
}

export const PhonicsWord: React.FC<Props> = ({ decoratedWord, className = "" }) => {
  const parts = decoratedWord.split(/(\[.*?\])/);
  
  let currentColor = "";
  const elements: React.ReactNode[] = [];

  parts.forEach((part, index) => {
    if (part.startsWith('[') && part.endsWith(']')) {
      if (part.startsWith('[/')) {
        currentColor = "";
      } else {
        currentColor = part.slice(1, -1);
      }
    } else if (part) {
      const colorMap: Record<string, string> = {
        red: 'text-rose-500 font-bold',
        blue: 'text-indigo-400 opacity-60', // Silent letters: slightly faded
        skyblue: 'text-sky-500 font-bold',
        purple: 'text-purple-500 font-bold',
        green: 'text-emerald-500 font-bold',
        orange: 'text-orange-500 font-bold',
      };
      
      const colorClass = colorMap[currentColor] || 'text-stone-800';
      elements.push(
        <span key={index} className={colorClass}>
          {part}
        </span>
      );
    }
  });

  return <div className={`flex gap-0 ${className}`}>{elements}</div>;
};
