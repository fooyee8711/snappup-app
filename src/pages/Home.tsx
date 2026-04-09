import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../store/progress';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { 
    masteredWords, 
    dailyWords, 
    dailyCompletedAt,
    getStandardReviewWords,
    getCustomUnmasteredWords,
    getCustomReviewWords
  } = useProgress();

  const isDailyComplete = dailyWords.length > 0 && dailyWords.every(id => masteredWords.includes(id));
  
  const cooldownMs = 12 * 60 * 60 * 1000;
  const timeSinceComplete = dailyCompletedAt ? Date.now() - dailyCompletedAt : cooldownMs;
  const isLocked = isDailyComplete && timeSinceComplete < cooldownMs;
  const hoursLeft = Math.ceil((cooldownMs - timeSinceComplete) / (60 * 60 * 1000));

  const standardReview = getStandardReviewWords();
  const customUnmastered = getCustomUnmasteredWords();
  const customReview = getCustomReviewWords();

  return (
    <div className="flex-1 flex flex-col items-center justify-center space-y-8 pb-12">
      <div className="text-center space-y-2">
        <h1 className="text-5xl font-black text-amber-600 tracking-tight drop-shadow-sm">SnapPup 🐶</h1>
        <p className="text-stone-500 font-bold text-lg">Fetch new words</p>
      </div>

      <div className="w-full space-y-6">
        {/* Daily Quest Section */}
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border-2 border-amber-100 space-y-4">
          <h2 className="text-2xl font-bold text-stone-800">Today's Walk</h2>
          {isLocked ? (
            <div className="w-full py-4 bg-emerald-100 text-emerald-800 rounded-2xl text-xl font-bold text-center border-2 border-emerald-200">
              🎉 Completed! Come back in {hoursLeft} hours.
            </div>
          ) : (
            <button
              onClick={() => navigate('/learn?type=daily')}
              className="w-full py-4 bg-amber-500 text-white rounded-2xl text-xl font-bold hover:bg-amber-600 transition-all active:scale-95 shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              Ready, Set, Dig!
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
          
          {customUnmastered.length > 0 && (
            <button
              onClick={() => navigate('/learn?type=custom')}
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
