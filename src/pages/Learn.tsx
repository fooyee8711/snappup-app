import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { words, WordEntry } from '../data/words';
import { useProgress } from '../store/progress';
import { TargetWord } from '../components/learn/TargetWord';
import { BuildWord } from '../components/learn/BuildWord';
import { StoryContext } from '../components/learn/StoryContext';
import { Spelling } from '../components/learn/Spelling';
import { RootExplorer } from '../components/learn/RootExplorer';
import { Dictation } from '../components/learn/Dictation';
import { FillInBlanks } from '../components/learn/FillInBlanks';
import { Praise } from '../components/Praise';

type Step = 'target' | 'build' | 'story' | 'spelling' | 'root' | 'praise' | 'dictation' | 'fill';

export const Learn: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'daily';
  
  const { 
    addMasteredWords, 
    getDailyWords, 
    getCustomUnmasteredWords,
    getCurriculumWords,
    getWordsByDate,
    markDailyComplete, 
    dailyWordCount,
    masteredWords,
    lastSession,
    updateLastSession,
    clearLastSession
  } = useProgress();
  
  const date = searchParams.get('date') || '';
  const mode = searchParams.get('mode') || '';
  const [isTesting, setIsTesting] = useState(mode === 'review');

  let currentSet: WordEntry[] = [];
  if (type === 'custom') {
    const filter = searchParams.get('filter');
    const pos = searchParams.get('pos');
    currentSet = getCustomUnmasteredWords();
    if (filter === 'uncategorized') {
      currentSet = currentSet.filter(w => !w.curriculumCategory);
    }
    if (pos) {
      currentSet = currentSet.filter(w => w.partOfSpeech === pos);
    }
    currentSet = currentSet.slice(0, dailyWordCount);
  } else if (type === 'curriculum') {
    const category = searchParams.get('category') || '';
    const sub = searchParams.get('sub') || undefined;
    currentSet = getCurriculumWords(category, sub).slice(0, 10);
  } else if (type === 'date') {
    if (mode === 'review') {
      currentSet = getWordsByDate(date).filter(w => masteredWords.includes(w.id));
    } else if (isTesting) {
      currentSet = getWordsByDate(date);
    } else {
      currentSet = getWordsByDate(date).filter(w => !masteredWords.includes(w.id));
    }
  } else {
    currentSet = getDailyWords();
    const pos = searchParams.get('pos');
    if (pos) {
      currentSet = currentSet.filter(w => w.partOfSpeech === pos);
    }
  }
  
  const [loop, setLoop] = useState(1);
  const maxLoops = mode === 'review' ? 1 : (type === 'date' ? 3 : 2);
  const [wordIndex, setWordIndex] = useState(0);
  const [step, setStep] = useState<Step>(mode === 'review' ? 'fill' : 'target');
  const [showPraise, setShowPraise] = useState(false);

  // Resume Session logic
  useEffect(() => {
    if (lastSession && lastSession.path === location.pathname + location.search && currentSet.length > 0) {
      const savedIndex = currentSet.findIndex(w => w.id === lastSession.wordId);
      if (savedIndex !== -1) {
        setWordIndex(savedIndex);
        setLoop(lastSession.loop || 1);
        setStep((lastSession.step as Step) || (mode === 'review' ? 'fill' : 'target'));
        setIsTesting(lastSession.isTesting || false);
      }
    }
  }, []);

  // Update session on changes
  const currentWordId = currentSet[wordIndex]?.id;
  const sessionPath = location.pathname + location.search;

  useEffect(() => {
    if (currentWordId) {
      updateLastSession(sessionPath, currentWordId, loop, step, isTesting);
    }
  }, [wordIndex, currentWordId, sessionPath, updateLastSession, loop, step, isTesting]);

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
          if (mode === 'review') {
            setStep('fill');
          } else {
            setStep(isTesting ? 'dictation' : 'target');
          }
        } else {
          if (loop < maxLoops) {
            setLoop(loop + 1);
            setWordIndex(0);
            if (mode === 'review') {
              setStep('fill');
            } else {
              setStep(isTesting ? 'dictation' : 'target');
            }
          } else {
            // Mastered the current learning set
            addMasteredWords(currentSet.map(w => w.id));
            clearLastSession();
            if (type === 'daily') {
              markDailyComplete();
            }
            
            if (type === 'date' && !isTesting && mode !== 'review') {
              // Transition to Dictation Test for ALL words of this date
              setIsTesting(true);
              setLoop(1);
              setWordIndex(0);
              setStep('dictation');
            } else if (type === 'curriculum') {
              navigate('/curriculum');
            } else {
              navigate('/');
            }
          }
        }
        break;
      case 'dictation':
        setShowPraise(true);
        setStep('praise');
        break;
      case 'fill':
        setStep('dictation');
        break;
    }
  };

  if (!currentWord) return null;

  return (
    <div className="flex-1 flex flex-col pt-12 pb-6">
      <div className="flex justify-between items-center mb-8 text-stone-400 text-base font-bold uppercase tracking-wider">
        <span>{isTesting ? '🏆 Test Phase' : `Loop ${loop}/${maxLoops}`}</span>
        <span>Word {wordIndex + 1}/{currentSet.length}</span>
      </div>

      <div className="flex-1 flex flex-col">
        {step === 'target' && <TargetWord word={currentWord} onNext={nextStep} />}
        {step === 'build' && <BuildWord word={currentWord} onNext={nextStep} />}
        {step === 'story' && <StoryContext word={currentWord} onNext={nextStep} />}
        {step === 'spelling' && <Spelling word={currentWord} onNext={nextStep} />}
        {step === 'root' && <RootExplorer word={currentWord} onNext={nextStep} />}
        {step === 'dictation' && <Dictation word={currentWord} onNext={nextStep} />}
        {step === 'fill' && <FillInBlanks word={currentWord} onNext={nextStep} />}
        {step === 'praise' && <Praise onNext={nextStep} />}
      </div>
    </div>
  );
};
