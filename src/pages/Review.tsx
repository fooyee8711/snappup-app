import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useProgress } from '../store/progress';
import { WordEntry } from '../data/words';
import { FillBlank } from '../components/review/FillBlank';
import { Dictation } from '../components/review/Dictation';
import { Praise } from '../components/Praise';

type Step = 'fill' | 'dictation' | 'praise';

export const Review: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'daily';
  
  const { getStandardReviewWords, getCustomReviewWords } = useProgress();
  
  const [reviewWords, setReviewWords] = useState<WordEntry[]>([]);
  const [wordIndex, setWordIndex] = useState(0);
  const [step, setStep] = useState<Step>('fill');
  const [showPraise, setShowPraise] = useState(false);

  useEffect(() => {
    const words = type === 'custom' ? getCustomReviewWords() : getStandardReviewWords();
    // Shuffle and take up to 5
    const shuffled = [...words].sort(() => Math.random() - 0.5).slice(0, 5);
    setReviewWords(shuffled);
  }, [type]);

  if (reviewWords.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center space-y-4">
        <p className="text-stone-500 font-bold text-xl">No words mastered yet!</p>
        <button
          onClick={() => navigate('/')}
          className="px-8 py-4 bg-amber-500 text-white rounded-2xl text-xl font-bold hover:bg-amber-600 transition-all active:scale-95 shadow-md hover:shadow-lg hover:-translate-y-1"
        >
          Go learn some words
        </button>
      </div>
    );
  }

  const currentWord = reviewWords[wordIndex];

  const nextStep = () => {
    if (step === 'fill') {
      if (wordIndex < reviewWords.length - 1) {
        setWordIndex(wordIndex + 1);
      } else {
        setStep('dictation');
        setWordIndex(0);
      }
    } else if (step === 'dictation') {
      if (wordIndex < reviewWords.length - 1) {
        setWordIndex(wordIndex + 1);
      } else {
        setStep('praise');
      }
    } else if (step === 'praise') {
      navigate('/');
    }
  };

  if (!currentWord) return null;

  return (
    <div className="flex-1 flex flex-col pt-12 pb-6">
      <div className="flex justify-between items-center mb-8 text-stone-400 text-base font-bold uppercase tracking-wider">
        <span>{type === 'custom' ? 'Custom Review' : 'Review Mode'}</span>
        <span>{step === 'fill' ? 'Fill Blanks' : step === 'dictation' ? 'Dictation' : ''} {wordIndex + 1}/{reviewWords.length}</span>
      </div>

      <div className="flex-1 flex flex-col">
        {step === 'fill' && <FillBlank word={currentWord} onNext={nextStep} />}
        {step === 'dictation' && <Dictation word={currentWord} onNext={nextStep} />}
        {step === 'praise' && <Praise onNext={nextStep} />}
      </div>
    </div>
  );
};
