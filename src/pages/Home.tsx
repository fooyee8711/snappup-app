import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../store/progress';
import clsx from 'clsx';

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
    getWordsByDate
  } = useProgress();

  const allWords = getAllWords();
  const dictationDates = Array.from(new Set(allWords.map(w => w.testDate).filter(Boolean))) as string[];
  dictationDates.sort();

  const isDailyComplete = dailyWords.length > 0 && dailyWords.every(id => masteredWords.includes(id));
  
  const cooldownMs = 12 * 60 * 60 * 1000;
  const timeSinceComplete = dailyCompletedAt ? Date.now() - dailyCompletedAt : cooldownMs;
  const isLocked = isDailyComplete && timeSinceComplete < cooldownMs;
  const hoursLeft = Math.ceil((cooldownMs - timeSinceComplete) / (60 * 60 * 1000));

  const standardReview = getStandardReviewWords();
  const customUnmastered = getCustomUnmasteredWords().filter(w => !w.curriculumCategory && !w.testDate);
  const customReview = getCustomReviewWords();
  
  const [posFilter, setPosFilter] = React.useState<string>('all');
  
  const posColors: Record<string, string> = {
    noun: 'bg-emerald-100 text-emerald-700',
    verb: 'bg-rose-100 text-rose-700',
    adjective: 'bg-sky-100 text-sky-700',
    adverb: 'bg-purple-100 text-purple-700'
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
        {/* School Dictation Section */}
        {dictationDates.length > 0 && (
          <div className="bg-white p-6 rounded-[2rem] shadow-sm border-2 border-indigo-100 space-y-4">
            <h2 className="text-2xl font-bold text-stone-800">🏫 School Dictation</h2>
            <div className="grid gap-3">
              {dictationDates.map(date => {
                const wordsForDate = getWordsByDate(date);
                const masteredForDate = wordsForDate.filter(w => masteredWords.includes(w.id)).length;
                const progressPercent = (masteredForDate / wordsForDate.length) * 100;

                return (
                  <button
                    key={date}
                    onClick={() => navigate(`/learn?type=date&date=${date}`)}
                    className="w-full text-left p-4 bg-indigo-50 border-2 border-indigo-100 rounded-2xl hover:border-indigo-400 hover:shadow-md transition-all active:scale-[0.98] group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-black text-indigo-700 text-lg">{date}</span>
                      <span className="font-bold text-indigo-400">{masteredForDate}/{wordsForDate.length}</span>
                    </div>
                    <div className="w-full bg-indigo-100 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-indigo-500 h-full transition-all duration-500" 
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

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
                    "px-2 py-1 rounded-lg text-[10px] font-black uppercase transition-all",
                    posFilter === pos 
                      ? (pos === 'all' ? 'bg-amber-500 text-white' : posColors[pos])
                      : 'bg-stone-50 text-stone-400 hover:bg-stone-100'
                  )}
                >
                  {pos === 'all' ? 'All' : pos.slice(0, 3)}
                </button>
              ))}
            </div>
          </div>
          
          {isLocked ? (
            <div className="w-full py-4 bg-emerald-100 text-emerald-800 rounded-2xl text-xl font-bold text-center border-2 border-emerald-200">
              🎉 Completed! Come back in {hoursLeft} hours.
            </div>
          ) : (
            <button
              onClick={() => navigate(`/learn?type=daily${posFilter !== 'all' ? `&pos=${posFilter}` : ''}`)}
              disabled={filteredDaily.length === 0}
              className="w-full py-4 bg-amber-500 text-white rounded-2xl text-xl font-bold hover:bg-amber-600 transition-all active:scale-95 shadow-md hover:shadow-lg hover:-translate-y-1 disabled:opacity-50"
            >
              {filteredDaily.length === 0 ? 'No words in this category' : 'Ready, Set, Dig!'}
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
          <h2 className="text-2xl font-bold text-stone-800">Fancy Tricks</h2>
          
          <button
            onClick={() => navigate('/curriculum')}
            className="w-full py-4 bg-purple-500 text-white rounded-2xl text-xl font-bold hover:bg-purple-600 transition-all active:scale-95 shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            🦴 Expert Training
          </button>
          
          <div className="border-t-2 border-teal-50 pt-2 space-y-3">
            <p className="text-xs text-stone-400 font-bold uppercase tracking-wider px-2">The Odd Ones (Uncategorized)</p>
            {customUnmastered.length > 0 && (
              <button
                onClick={() => navigate('/learn?type=custom&filter=uncategorized')}
                className="w-full py-4 bg-teal-500 text-white rounded-2xl text-xl font-bold hover:bg-teal-600 transition-all active:scale-95 shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                Ready, Set, Dig! ({customUnmastered.length})
              </button>
            )}

            {customReview.length > 0 && (
              <button
                onClick={() => navigate('/review?type=custom')}
                className="w-full py-4 bg-teal-100 text-teal-800 rounded-2xl text-xl font-bold hover:bg-teal-200 transition-all active:scale-95 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                Bone Collection ({customReview.length})
              </button>
            )}
          </div>

          <button
            onClick={() => navigate('/manage')}
            className="w-full py-4 bg-white text-teal-600 border-4 border-teal-100 rounded-2xl text-xl font-bold hover:bg-teal-50 transition-all active:scale-95 shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            + Teach a New Trick
          </button>
        </div>
      </div>
    </div>
  );
};
