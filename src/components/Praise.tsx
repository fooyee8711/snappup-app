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
    
    // Play praise sound
    const audio = new Audio('https://cdn.pixabay.com/audio/2021/08/04/audio_12b0aedff4.mp3');
    audio.volume = 0.4;
    audio.play().catch(e => console.log('Audio play failed:', e));

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
