import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../store/progress';
import clsx from 'clsx';
import { CheckCircle } from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { 
    masteredWords, 
    dailyWords, 
    dailyCompletedAt,
    getStandardReviewWords,
    getCustomUnmasteredWords,
    getCustomReviewWords,
    getAllWords,
    getWordsByDate,
    lastSession
  } = useProgress();

  const [showArchive, setShowArchive] = React.useState(false);
  
  const allWords = getAllWords();
  const lastWord = lastSession ? allWords.find(w => w.id === lastSession.wordId) : null;
  const dictationDates = Array.from(new Set(allWords.map(w => w.testDate).filter(Boolean))) as string[];
  dictationDates.sort().reverse(); // Show newest first

  const todayStr = new Date().toISOString().split('T')[0];
  
  const activeDictations = dictationDates.filter(date => {
    const isUpcoming = date >= todayStr;
    const wordsForDate = getWordsByDate(date);
    const masteredCount = wordsForDate.filter(w => masteredWords.includes(w.id)).length;
    const isIncomplete = masteredCount < wordsForDate.length;
    return isUpcoming || isIncomplete;
  });

  // Limit visible to top 2, move rest to archive
  const visibleActive = activeDictations.slice(0, 2);
  const hiddenActive = activeDictations.slice(2);
  const archivedDictations = [...hiddenActive, ...dictationDates.filter(date => !activeDictations.includes(date))];
  // Sort archived by date descending
  archivedDictations.sort().reverse();

  const isDailyComplete = dailyWords.length > 0 && dailyWords.every(id => masteredWords.includes(id));
  
  const cooldownMs = 12 * 60 * 60 * 1000;
  const timeSinceComplete = dailyCompletedAt ? Date.now() - dailyCompletedAt : cooldownMs;
  const isLocked = isDailyComplete && timeSinceComplete < cooldownMs;
  const hoursLeft = Math.ceil((cooldownMs - timeSinceComplete) / (60 * 60 * 1000));

  const standardReview = getStandardReviewWords();
  const practiceWords = allWords.filter(w => !masteredWords.includes(w.id) && !w.curriculumCategory && !w.testDate);
  const customReview = getCustomReviewWords();
  
  const [posFilter, setPosFilter] = React.useState<string>('all');
  
  const posColors: Record<string, string> = {
    noun: 'bg-emerald-100 text-emerald-700',
    verb: 'bg-rose-100 text-rose-700',
    adjective: 'bg-sky-100 text-sky-700',
    adverb: 'bg-purple-100 text-purple-700'
  };

  const getFilteredCount = (pos: string) => {
    if (pos === 'all') return practiceWords.length;
    return practiceWords.filter(w => w.partOfSpeech === pos).length;
  };

  const filteredDaily = posFilter === 'all' 
    ? dailyWords 
    : dailyWords.filter(id => {
        const word = allWords.find(w => w.id === id);
        return word?.partOfSpeech === posFilter;
      });

  return (
    <div className="flex-1 flex flex-col items-center justify-center space-y-8 pb-12">
      <div className="text-center space-y-2">
        <h1 className="text-5xl font-black text-amber-600 tracking-tight drop-shadow-sm">SnapPup 🐶</h1>
        <p className="text-stone-500 font-bold text-lg">Fetch new words</p>
      </div>

      <div className="w-full space-y-6">
        {/* Resume Session Card */}
        {lastSession && lastWord && (
          <div className="bg-amber-600 p-6 rounded-[2rem] shadow-lg border-2 border-amber-500 space-y-4 transform hover:scale-[1.02] transition-all">
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <span className="animate-pulse">🦴</span> Resume Training?
            </h2>
            <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <p className="text-amber-100 text-sm font-bold uppercase tracking-wider mb-1">Last Word Studied:</p>
              <p className="text-white text-3xl font-black">{lastWord.word}</p>
            </div>
            <button
              onClick={() => navigate(lastSession.path)}
              className="w-full py-4 bg-white text-amber-600 rounded-2xl text-xl font-black hover:bg-amber-50 transition-all active:scale-95 shadow-md"
            >
              Pick Up the Scent
            </button>
          </div>
        )}
        {/* School Dictation Section */}
        {dictationDates.length > 0 && (
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border-2 border-indigo-100 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black text-stone-800 flex items-center gap-2">
                <span className="text-3xl">🏫</span> School Dictations
              </h2>
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                {activeDictations.length} Active
              </span>
            </div>
            
            <div className="grid gap-6">
              {/* Active Missions */}
              {visibleActive.map(date => {
                const wordsForDate = getWordsByDate(date);
                const masteredForDate = wordsForDate.filter(w => masteredWords.includes(w.id)).length;
                const progressPercent = (masteredForDate / wordsForDate.length) * 100;
                const ghostProgress = Math.min(100, progressPercent + (masteredForDate > 0 ? 15 : 0));

                const isUpcoming = date >= todayStr;
                return (
                  <div key={date} className="group flex flex-col gap-2">
                    <button
                      onClick={() => navigate(`/learn?type=date&date=${date}`)}
                      className="w-full text-left p-5 bg-indigo-50/50 border-2 border-indigo-100 rounded-[2rem] hover:border-indigo-400 hover:bg-white hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden"
                    >
                      <div className="flex justify-between items-end mb-3 relative z-10">
                        <div className="flex flex-col">
                          <span className="font-black text-indigo-900 text-xl tracking-tight leading-none">{date}</span>
                          <span className="text-indigo-400 text-[10px] font-black uppercase mt-1 tracking-widest">
                            {isUpcoming ? '🚀 NEXT TARGET' : '🔄 FINISH UP'} • {wordsForDate.length} Words
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="font-black text-indigo-700 text-2xl">{masteredForDate}</span>
                          <span className="text-indigo-300 font-bold text-sm">/{wordsForDate.length}</span>
                        </div>
                      </div>

                      <div className="relative h-6 w-full bg-indigo-100/50 rounded-full p-1 overflow-hidden border border-indigo-100 shadow-inner">
                        <div 
                          className="absolute h-full border-r-2 border-indigo-300 border-dashed z-20 opacity-50"
                          style={{ left: `${ghostProgress}%` }}
                        >
                          <div className="absolute -top-1 -right-3 text-[10px] opacity-40 grayscale font-black text-indigo-500 whitespace-nowrap rotate-12">
                            👻 GHOST
                          </div>
                        </div>

                        <div 
                          className="h-full bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full transition-all duration-1000 relative"
                          style={{ width: `${progressPercent}%` }}
                        >
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-0.5 shadow-md border-2 border-indigo-500 z-30">
                            <span className="text-xs">🐶</span>
                          </div>
                        </div>
                      </div>

                      {progressPercent >= ghostProgress && progressPercent > 0 && (
                        <div className="mt-2 text-[10px] font-black text-rose-500 italic animate-pulse flex items-center gap-1 justify-center">
                          🔥 OVERTAKING THE GHOST DOG!
                        </div>
                      )}
                    </button>
                    
                    {masteredForDate > 0 && (
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => navigate(`/learn?type=date&date=${date}&mode=review`)}
                          className="flex-1 py-3 bg-white text-indigo-600 border-2 border-indigo-100 rounded-2xl text-[10px] font-black hover:bg-indigo-50 hover:border-indigo-400 transition-all active:scale-[0.98] shadow-sm flex items-center justify-center gap-2"
                        >
                          <span className="text-sm">🦴</span> REVIEW ALL
                        </button>
                        <button
                          onClick={() => navigate(`/learn?type=date&date=${date}&mode=test`)}
                          className="flex-1 py-3 bg-indigo-600 text-white border-2 border-indigo-600 rounded-2xl text-[10px] font-black hover:bg-indigo-700 transition-all active:scale-[0.98] shadow-md flex items-center justify-center gap-2"
                        >
                          <span className="text-sm">⚡</span> MOCK TEST
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Archived Sections */}
              {archivedDictations.length > 0 && (
                <div className="pt-4 border-t-2 border-indigo-50 border-dashed">
                  <button
                    onClick={() => setShowArchive(!showArchive)}
                    className="w-full py-4 bg-indigo-50/30 text-indigo-400 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:text-indigo-600 hover:bg-indigo-50 transition-all flex items-center justify-center gap-2"
                  >
                    {showArchive ? 'Close Archive' : `View Archive (${archivedDictations.length})`}
                    <span className={clsx("transition-transform duration-300", showArchive && "rotate-180")}>▼</span>
                  </button>

                  {showArchive && (
                    <div className="grid gap-3 mt-4 animate-in slide-in-from-top-2 duration-300">
                      {archivedDictations.map(date => {
                        const wordsForDate = getWordsByDate(date);
                        return (
                          <button
                            key={date}
                            onClick={() => navigate(`/learn?type=date&date=${date}`)}
                            className="w-full flex items-center justify-between p-4 bg-stone-50 border-2 border-stone-100 rounded-2xl grayscale hover:grayscale-0 hover:border-indigo-200 transition-all text-left"
                          >
                            <div>
                              <span className="font-black text-stone-600">{date}</span>
                              <span className="ml-2 text-[8px] font-black text-stone-400 uppercase tracking-widest">MASTERED! 🏆</span>
                            </div>
                            <span className="text-stone-300">➜</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* New Special Collection Module */}
        <div className="relative group">
          <button
            onClick={() => navigate('/special-collection')}
            className="w-full p-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 flex flex-col items-center text-center space-y-2 border-4 border-white/20"
          >
            <div className="text-4xl">💎</div>
            <h2 className="text-2xl font-black italic tracking-tighter">THE SPECIAL VAULT</h2>
            <p className="text-indigo-100 text-xs font-bold uppercase tracking-widest leading-none">Cool • Tricky • Hard • Nouns</p>
          </button>
          <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] font-black px-2 py-1 rounded-lg shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
            NEW!!
          </div>
        </div>

        {/* Daily Quest Section */}
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border-2 border-amber-100 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-stone-800">Today's Walk</h2>
            <div className="flex gap-1">
              {['all', 'noun', 'verb', 'adjective', 'adverb'].map(pos => (
                <button
                  key={pos}
                  onClick={() => setPosFilter(pos)}
                  className={clsx(
                    "px-2 py-1 rounded-lg text-[10px] font-black uppercase transition-all flex items-center gap-1",
                    posFilter === pos 
                      ? (pos === 'all' ? 'bg-amber-500 text-white' : posColors[pos])
                      : 'bg-stone-50 text-stone-400 hover:bg-stone-100'
                  )}
                >
                  <span>{pos === 'all' ? 'All' : pos.slice(0, 3)}</span>
                  <span className="opacity-60 text-[8px]">({getFilteredCount(pos)})</span>
                </button>
              ))}
            </div>
          </div>
          
          {isLocked && posFilter === 'all' ? (
            <div className="w-full py-4 bg-emerald-100 text-emerald-800 rounded-2xl text-xl font-bold text-center border-2 border-emerald-200">
              🎉 Daily Walk Done! Come back in {hoursLeft} hours.
            </div>
          ) : (
            <button
              onClick={() => {
                if (posFilter === 'all') {
                  navigate(`/learn?type=daily`);
                } else {
                  navigate(`/learn?type=custom&filter=uncategorized&pos=${posFilter}`);
                }
              }}
              disabled={getFilteredCount(posFilter) === 0}
              className="w-full py-4 bg-amber-500 text-white rounded-2xl text-xl font-bold hover:bg-amber-600 transition-all active:scale-95 shadow-md hover:shadow-lg hover:-translate-y-1 disabled:opacity-50"
            >
              {getFilteredCount(posFilter) === 0 ? 'No words left!' : 'Ready, Set, Dig!'}
            </button>
          )}
          
          <button
            onClick={() => navigate('/review?type=daily')}
            disabled={standardReview.length === 0}
            className="w-full py-4 bg-amber-100 text-amber-800 rounded-2xl text-xl font-bold hover:bg-amber-200 transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100 disabled:hover:-translate-y-0 disabled:hover:shadow-none shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            Bone Collection ({standardReview.length})
          </button>
        </div>

        {/* Custom Words Section */}
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border-2 border-teal-100 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-stone-800">Expert Mode</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => navigate('/curriculum')}
              className="py-6 bg-purple-500 text-white rounded-2xl text-base font-black hover:bg-purple-600 transition-all active:scale-95 shadow-md hover:shadow-lg flex flex-col items-center justify-center space-y-1"
            >
              <span className="text-2xl">🦴</span>
              <span>Training</span>
            </button>

            <button
              onClick={() => navigate('/review?type=custom')}
              disabled={customReview.length === 0}
              className="py-6 bg-teal-100 text-teal-800 rounded-2xl text-base font-black hover:bg-teal-200 transition-all active:scale-95 border-2 border-teal-200 disabled:opacity-50 flex flex-col items-center justify-center space-y-1"
            >
              <span className="text-2xl">🦴</span>
              <span>Review ({customReview.length})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
