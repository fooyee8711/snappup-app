import React from 'react';
import { WordEntry } from '../../data/words';
import { Volume2 } from 'lucide-react';
import { PhonicsWord } from './PhonicsWord';
import clsx from 'clsx';

interface Props {
  word: WordEntry;
  onNext: () => void;
}

export const TargetWord: React.FC<Props> = ({ word, onNext }) => {
  const playAudio = () => {
    const utterance = new SpeechSynthesisUtterance(word.word);
    utterance.lang = 'en-GB';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-6">
        <h2 className="text-5xl font-bold tracking-tight flex flex-col justify-center items-center gap-4">
          <div className="flex items-center gap-4">
            {word.partOfSpeech && (
              <span className={clsx(
                "text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-tighter",
                word.partOfSpeech === 'noun' && "bg-emerald-100 text-emerald-700",
                word.partOfSpeech === 'verb' && "bg-rose-100 text-rose-700",
                word.partOfSpeech === 'adjective' && "bg-sky-100 text-sky-700",
                word.partOfSpeech === 'adverb' && "bg-purple-100 text-purple-700"
              )}>
                {word.partOfSpeech}
              </span>
            )}
            {word.level && (
              <span className="text-sm font-black bg-amber-100 text-amber-600 px-3 py-1 rounded-full uppercase tracking-wider">
                {word.level}
              </span>
            )}
            {word.decoratedWord ? (
              <PhonicsWord decoratedWord={word.decoratedWord} className="text-5xl font-black" />
            ) : (
              <div className="flex gap-1">
                {word.morphology.prefix && (
                  <span className="text-blue-500">{word.morphology.prefix}</span>
                )}
                <span className="text-gray-900">{word.morphology.root}</span>
                {word.morphology.suffix && (
                  <span className="text-pink-500">{word.morphology.suffix}</span>
                )}
              </div>
            )}
            <button 
              onClick={playAudio}
              className="p-3 text-amber-500 hover:bg-amber-100 rounded-full transition-all active:scale-90"
              aria-label="Read word aloud"
            >
              <Volume2 size={36} />
            </button>
          </div>
          
          {word.phonicsRules && word.phonicsRules.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              {word.phonicsRules.map((rule, idx) => (
                <span key={idx} className="text-xs font-bold bg-stone-100 text-stone-500 px-2 py-1 rounded-lg uppercase tracking-wider">
                  {rule}
                </span>
              ))}
            </div>
          )}
        </h2>
        
        <div className="space-y-4 max-w-sm mx-auto">
          <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-amber-100">
            <p className="text-sm text-stone-400 font-bold uppercase tracking-wider mb-2">Meaning</p>
            <p className="text-stone-800 font-medium text-lg">{word.childMeaning || word.meaning}</p>
          </div>
          
          <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-amber-100">
            <p className="text-sm text-stone-400 font-bold uppercase tracking-wider mb-2">Example</p>
            <p className="text-stone-800 font-medium text-lg italic">"{word.exampleSentence}"</p>
          </div>
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full py-4 bg-amber-500 text-white rounded-2xl text-xl font-bold hover:bg-amber-600 transition-all active:scale-95 shadow-md hover:shadow-lg hover:-translate-y-1 mt-auto"
      >
        Got it
      </button>
    </div>
  );
};
