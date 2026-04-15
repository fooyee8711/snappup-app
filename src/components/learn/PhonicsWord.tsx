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
        red: 'text-red-500',
        blue: 'text-blue-500',
        skyblue: 'text-sky-400',
        purple: 'text-purple-500',
        green: 'text-emerald-500',
        orange: 'text-orange-500',
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
