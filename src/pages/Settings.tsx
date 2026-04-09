import React, { useState } from 'react';
import { useProgress } from '../store/progress';
import { WordEntry } from '../data/words';
import { Settings as SettingsIcon, Upload, RotateCcw, BarChart3, Trash2, CheckCircle2, AlertCircle } from 'lucide-react';
import clsx from 'clsx';

export const Settings: React.FC = () => {
  const { 
    dailyWordCount, 
    setDailyWordCount, 
    getAllWords, 
    masteredWords, 
    dailyStats, 
    mistakeCounts,
    resetWord,
    deleteWord,
    addCustomWord
  } = useProgress();

  const [bulkInput, setBulkInput] = useState('');
  const [selectedModeFilter, setSelectedModeFilter] = useState('all');
  const [wordToDelete, setWordToDelete] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const allWords = getAllWords();
  const totalWords = allWords.length;
  const masteredCount = masteredWords.length;
  const progressPercent = Math.round((masteredCount / totalWords) * 100) || 0;

  const filteredWords = allWords.filter(w => {
    if (selectedModeFilter === 'all') return true;
    if (selectedModeFilter === 'builtin') return !w.id.startsWith('custom-');
    if (selectedModeFilter === 'custom') return w.id.startsWith('custom-');
    return true;
  });

  const handleBulkUpload = async () => {
    if (!bulkInput.trim()) return;
    setIsUploading(true);
    setUploadStatus(null);

    const wordsToUpload = bulkInput
      .split('\n')
      .map(w => w.trim())
      .filter(w => w.length > 0);

    let successCount = 0;
    let failCount = 0;

    for (const word of wordsToUpload) {
      try {
        const response = await fetch('/api/generate-word', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ word })
        });

        if (!response.ok) throw new Error();

        const data = await response.json();
        const newWord: WordEntry = {
          id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          word: word.toLowerCase(),
          morphology: {
            prefix: data.morphology.prefix || undefined,
            root: data.morphology.root,
            suffix: data.morphology.suffix || undefined,
          },
          meaning: data.meaning,
          exampleSentence: data.exampleSentence,
          story: data.story,
          relatedWords: [],
          category: 'Bulk Upload'
        };
        addCustomWord(newWord);
        successCount++;
      } catch (err) {
        failCount++;
      }
    }

    setIsUploading(false);
    setBulkInput('');
    setUploadStatus({
      type: failCount === 0 ? 'success' : 'error',
      message: `Uploaded ${successCount} words.${failCount > 0 ? ` Failed ${failCount} words.` : ''}`
    });
  };

  // Sort words by mistakes
  const sortedWords = [...filteredWords].sort((a, b) => (mistakeCounts[b.id] || 0) - (mistakeCounts[a.id] || 0));

  return (
    <div className="flex-1 flex flex-col pt-12 pb-12 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-black text-amber-600 tracking-tight drop-shadow-sm flex items-center justify-center gap-3">
          <SettingsIcon size={36} /> Settings
        </h2>
        <p className="text-stone-500 font-bold text-lg">Manage your learning journey</p>
      </div>

      {/* Daily Goal */}
      <section className="bg-white p-6 rounded-[2rem] shadow-sm border-2 border-amber-100 space-y-4">
        <h3 className="text-xl font-bold text-stone-800 flex items-center gap-2">
          <RotateCcw size={20} className="text-amber-500" /> Daily Goal
        </h3>
        <div className="flex items-center gap-4">
          <span className="text-stone-600 font-medium">Words per walk:</span>
          <input 
            type="number" 
            min="1" 
            max="20"
            value={dailyWordCount}
            onChange={(e) => setDailyWordCount(parseInt(e.target.value, 10) || 5)}
            className="w-20 p-2 text-center font-bold text-amber-600 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-400"
          />
        </div>
      </section>

      {/* Progress Stats */}
      <section className="bg-white p-6 rounded-[2rem] shadow-sm border-2 border-teal-100 space-y-6">
        <h3 className="text-xl font-bold text-stone-800 flex items-center gap-2">
          <BarChart3 size={20} className="text-teal-500" /> Progress Stats
        </h3>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-bold text-stone-500 uppercase tracking-wider">
            <span>Overall Mastery</span>
            <span>{masteredCount} / {totalWords}</span>
          </div>
          <div className="w-full h-4 bg-stone-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-teal-500 transition-all duration-1000" 
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-teal-50 p-4 rounded-2xl border-2 border-teal-100 text-center">
            <div className="text-2xl font-black text-teal-600">{masteredCount}</div>
            <div className="text-xs font-bold text-teal-400 uppercase">Mastered</div>
          </div>
          <div className="bg-amber-50 p-4 rounded-2xl border-2 border-amber-100 text-center">
            <div className="text-2xl font-black text-amber-600">{dailyStats[new Date().toDateString()] || 0}</div>
            <div className="text-xs font-bold text-amber-400 uppercase">Today</div>
          </div>
        </div>
      </section>

      {/* Bulk Upload */}
      <section className="bg-white p-6 rounded-[2rem] shadow-sm border-2 border-purple-100 space-y-4">
        <h3 className="text-xl font-bold text-stone-800 flex items-center gap-2">
          <Upload size={20} className="text-purple-500" /> AI Bulk Upload
        </h3>
        <p className="text-sm text-stone-500">Enter one word per line. AI will generate all details for you.</p>
        <textarea 
          value={bulkInput}
          onChange={(e) => setBulkInput(e.target.value)}
          placeholder="apple&#10;banana&#10;cherry"
          className="w-full h-32 p-4 bg-purple-50 border-2 border-purple-100 rounded-2xl focus:outline-none focus:border-purple-300 font-mono text-sm"
        />
        <button 
          onClick={handleBulkUpload}
          disabled={isUploading || !bulkInput.trim()}
          className="w-full py-3 bg-purple-500 text-white rounded-xl font-bold hover:bg-purple-600 transition-all disabled:opacity-50 flex justify-center items-center gap-2"
        >
          {isUploading ? (
            <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Processing...</>
          ) : 'Upload Words'}
        </button>
      </section>

      {uploadStatus && (
        <div className={clsx(
          "p-4 rounded-xl text-sm font-bold flex items-center gap-2 sticky bottom-4 shadow-lg mx-6",
          uploadStatus.type === 'success' ? "bg-emerald-100 text-emerald-700 border-2 border-emerald-200" : "bg-red-100 text-red-700 border-2 border-red-200"
        )}>
          {uploadStatus.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
          {uploadStatus.message}
        </div>
      )}

      {/* Word Management */}
      <section className="bg-white p-6 rounded-[2rem] shadow-sm border-2 border-stone-100 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="text-xl font-bold text-stone-800 flex items-center gap-2">
            <Trash2 size={20} className="text-stone-500" /> Word Management
          </h3>
          
          <div className="flex items-center gap-2">
            <select 
              value={selectedModeFilter}
              onChange={(e) => setSelectedModeFilter(e.target.value)}
              className="p-2 bg-stone-50 border-2 border-stone-100 rounded-xl font-bold text-stone-600 focus:outline-none focus:border-stone-300 text-sm"
            >
              <option value="all">All Words</option>
              <option value="builtin">Built-in Words</option>
              <option value="custom">Fancy Tricks (Manual)</option>
            </select>
          </div>
        </div>

        <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
          {sortedWords.length === 0 ? (
            <div className="text-center py-10 text-stone-400 font-medium italic">
              No words found in this category.
            </div>
          ) : (
            sortedWords.map(word => (
              <div key={word.id} className="flex items-center justify-between p-3 bg-stone-50 rounded-xl border border-stone-100 group">
                <div>
                  <div className="font-bold text-stone-800">{word.word}</div>
                  <div className="text-xs text-stone-400 font-medium">
                    {masteredWords.includes(word.id) ? '✅ Mastered' : '⏳ Learning'} 
                    {mistakeCounts[word.id] > 0 && ` • ${mistakeCounts[word.id]} mistakes`}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {masteredWords.includes(word.id) && (
                    <button 
                      onClick={() => resetWord(word.id)}
                      className="p-2 text-stone-400 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all"
                      title="Relearn this word"
                    >
                      <RotateCcw size={18} />
                    </button>
                  )}
                  {(word.id.startsWith('custom-')) && (
                    <div className="flex items-center">
                      {wordToDelete === word.id ? (
                        <div className="flex items-center gap-1 animate-in fade-in slide-in-from-right-2 duration-200">
                          <button 
                            onClick={() => {
                              deleteWord(word.id);
                              setWordToDelete(null);
                            }}
                            className="px-2 py-1 bg-red-500 text-white text-[10px] font-bold rounded-md hover:bg-red-600"
                          >
                            Yes
                          </button>
                          <button 
                            onClick={() => setWordToDelete(null)}
                            className="px-2 py-1 bg-stone-200 text-stone-600 text-[10px] font-bold rounded-md hover:bg-stone-300"
                          >
                            No
                          </button>
                        </div>
                      ) : (
                        <button 
                          onClick={() => setWordToDelete(word.id)}
                          className="p-2 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                          title="Delete word"
                        >
                          <Trash2 size={18} />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};
