import React, { useState, useEffect } from 'react';
import { WordEntry, words as allWords } from '../../data/words';
import { useProgress } from '../../store/progress';
import clsx from 'clsx';

interface Props {
  word: WordEntry;
  onNext: () => void;
}

export const FillBlank: React.FC<Props> = ({ word, onNext }) => {
  const { removeMasteredWord, getAllWords, incrementMistake } = useProgress();
  const [options, setOptions] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [selectedWrong, setSelectedWrong] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [demoted, setDemoted] = useState(false);

  useEffect(() => {
    const allWords = getAllWords();
    // Generate 4 options (1 correct, 3 distractors)
    const distractors = allWords
      .filter(w => w.id !== word.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(w => w.word);
    
    const newOptions = [...distractors, word.word].sort(() => Math.random() - 0.5);
    setOptions(newOptions);
    setMistakes(0);
    setSelectedWrong([]);
    setIsCorrect(false);
    setDemoted(false);
  }, [word]);

  const handleSelect = (selectedWord: string) => {
    if (isCorrect || demoted || selectedWrong.includes(selectedWord)) return;

    if (selectedWord === word.word) {
      setIsCorrect(true);
      setTimeout(onNext, 1500);
    } else {
      incrementMistake(word.id);
      const newMistakes = mistakes + 1;
      setMistakes(newMistakes);
      setSelectedWrong([...selectedWrong, selectedWord]);

      if (newMistakes >= 3) {
        setDemoted(true);
        removeMasteredWord(word.id);
        setTimeout(onNext, 2500);
      }
    }
  };

  const renderSentence = () => {
    const parts = word.exampleSentence.split(new RegExp(`(${word.word})`, 'gi'));
    return parts.map((part, i) => {
      if (part.toLowerCase() === word.word.toLowerCase()) {
        return <span key={i} className="inline-block w-32 border-b-2 border-purple-300 mx-1"></span>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="flex-1 flex flex-col items-center space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-2 mt-8">
        <h3 className="text-3xl font-black text-stone-800 tracking-tight">Fill in the blank</h3>
      </div>

      <div className="bg-white p-8 rounded-[2rem] shadow-sm border-2 border-amber-100 text-2xl text-stone-700 text-center leading-relaxed font-medium">
        {renderSentence()}
      </div>

      <div className="w-full space-y-4">
        {options.map((opt) => {
          const isWrong = selectedWrong.includes(opt);
          const isRight = isCorrect && opt === word.word;
          return (
            <button
              key={opt}
              onClick={() => handleSelect(opt)}
              disabled={isWrong || isCorrect || demoted}
              className={clsx(
                "w-full py-5 rounded-3xl text-xl font-bold transition-all active:scale-95 shadow-sm border-4 hover:shadow-md hover:-translate-y-1",
                isRight ? "bg-emerald-100 text-emerald-700 border-emerald-400" :
                isWrong ? "bg-red-50 text-red-400 border-red-200 opacity-50" :
                "bg-white text-stone-700 border-amber-100 hover:bg-amber-50 hover:border-amber-300"
              )}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {demoted && (
        <div className="text-center text-xl font-bold text-orange-500 animate-bounce bg-orange-50 p-4 rounded-2xl border-2 border-orange-200">
          Let's learn this word again later!
        </div>
      )}
      
      {isCorrect && (
        <div className="text-center text-2xl font-bold text-emerald-500 animate-bounce">
          Spot on!
        </div>
      )}
    </div>
  );
};
