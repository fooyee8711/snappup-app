import React, { useEffect, useState } from 'react';

const praises = [
  "Brilliant!",
  "Jolly good!",
  "Top-notch!",
  "Absolutely smashing!",
  "Cracking job!",
  "Splendid!"
];

interface Props {
  onNext: () => void;
}

export const Praise: React.FC<Props> = ({ onNext }) => {
  const [praise, setPraise] = useState('');

  useEffect(() => {
    setPraise(praises[Math.floor(Math.random() * praises.length)]);
    const timer = setTimeout(onNext, 2000);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="flex-1 flex items-center justify-center animate-in zoom-in duration-500">
      <h2 className="text-5xl font-bold text-purple-600 text-center animate-bounce">
        {praise}
      </h2>
    </div>
  );
};
