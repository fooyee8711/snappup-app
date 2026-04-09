import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { words, WordEntry } from '../data/words';
import { useProgress } from '../store/progress';
import { TargetWord } from '../components/learn/TargetWord';
import { BuildWord } from '../components/learn/BuildWord';
import { StoryContext } from '../components/learn/StoryContext';
import { Spelling } from '../components/learn/Spelling';
import { RootExplorer } from '../components/learn/RootExplorer';
import { Praise } from '../components/Praise';

type Step = 'target' | 'build' | 'story' | 'spelling' | 'root' | 'praise';

export const Learn: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'daily';
  
  const { 
    addMasteredWords, 
    getDailyWords, 
    getCustomUnmasteredWords, 
    markDailyComplete, 
    dailyWordCount
  } = useProgress();
  
  let currentSet: WordEntry[] = [];
  if (type === 'custom') {
    currentSet = getCustomUnmasteredWords().slice(0, dailyWordCount);
  } else {
    currentSet = getDailyWords();
  }
  
  const [loop, setLoop] = useState(1);
  const [wordIndex, setWordIndex] = useState(0);
  const [step, setStep] = useState<Step>('target');
  const [showPraise, setShowPraise] = useState(false);

  if (currentSet.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center space-y-4">
        <p className="text-stone-500 font-bold text-xl">No words to learn right now!</p>
        <button
          onClick={() => navigate('/')}
          className="px-8 py-4 bg-amber-500 text-white rounded-2xl text-xl font-bold hover:bg-amber-600 transition-all active:scale-95 shadow-md hover:shadow-lg hover:-translate-y-1"
        >
          Go Home
        </button>
      </div>
    );
  }

  const currentWord = currentSet[wordIndex];

  const nextStep = () => {
    switch (step) {
      case 'target':
        setStep('build');
        break;
      case 'build':
        setStep('story');
        break;
      case 'story':
        setStep('spelling');
        break;
      case 'spelling':
        if (currentWord.relatedWords && currentWord.relatedWords.length >= 2) {
          setStep('root');
        } else {
          setShowPraise(true);
          setStep('praise');
        }
        break;
      case 'root':
        setShowPraise(true);
        setStep('praise');
        break;
      case 'praise':
        setShowPraise(false);
        if (wordIndex < currentSet.length - 1) {
          setWordIndex(wordIndex + 1);
          setStep('target');
        } else {
          if (loop === 1) {
            setLoop(2);
            setWordIndex(0);
            setStep('target');
          } else {
            // Mastered the set!
            addMasteredWords(currentSet.map(w => w.id));
            if (type === 'daily') {
              markDailyComplete();
            }
            navigate('/');
          }
        }
        break;
    }
  };

  if (!currentWord) return null;

  return (
    <div className="flex-1 flex flex-col pt-12 pb-6">
      <div className="flex justify-between items-center mb-8 text-stone-400 text-base font-bold uppercase tracking-wider">
        <span>Loop {loop}/2</span>
        <span>Word {wordIndex + 1}/{currentSet.length}</span>
      </div>

      <div className="flex-1 flex flex-col">
        {step === 'target' && <TargetWord word={currentWord} onNext={nextStep} />}
        {step === 'build' && <BuildWord word={currentWord} onNext={nextStep} />}
        {step === 'story' && <StoryContext word={currentWord} onNext={nextStep} />}
        {step === 'spelling' && <Spelling word={currentWord} onNext={nextStep} />}
        {step === 'root' && <RootExplorer word={currentWord} onNext={nextStep} />}
        {step === 'praise' && <Praise onNext={nextStep} />}
      </div>
    </div>
  );
};
