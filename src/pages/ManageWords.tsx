import React, { useState, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../store/progress';
import { WordEntry } from '../data/words';
import { Trash2, CheckCircle, Circle, Search } from 'lucide-react';
import clsx from 'clsx';

export const ManageWords: React.FC = () => {
  const navigate = useNavigate();
  const { 
    addCustomWord, 
    customWords, 
    masteredWords, 
    addMasteredWord, 
    removeMasteredWord, 
    deleteWord 
  } = useProgress();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [wordsInput, setWordsInput] = useState('');
  const [testDate, setTestDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentWord, setCurrentWord] = useState('');
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [results, setResults] = useState<{ word: string; status: 'success' | 'error'; message?: string }[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWords = useMemo(() => {
    if (!searchTerm) return customWords;
    return customWords.filter(w => 
      w.word.toLowerCase().includes(searchTerm.toLowerCase()) || 
      w.meaning.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [customWords, searchTerm]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setResults([]);
    
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const rawJson = JSON.parse(event.target?.result as string);
        let wordsToImport: any[] = [];

        // Handle KET Peppa Pig format
        if (rawJson.ket_category_analysis) {
          Object.entries(rawJson.ket_category_analysis).forEach(([category, words]: [string, any]) => {
            words.forEach((w: any) => {
              wordsToImport.push({
                ...w,
                category: category,
                isKet: true
              });
            });
          });
        } else if (Array.isArray(rawJson)) {
          // Handle NotebookLM format
          wordsToImport = rawJson;
        } else {
          throw new Error('Unsupported JSON format.');
        }

        setProgress({ current: 0, total: wordsToImport.length });

        for (let i = 0; i < wordsToImport.length; i++) {
          const item = wordsToImport[i];
          setProgress(prev => ({ ...prev, current: i + 1 }));
          
          if (item.isKet) {
            // ... (keep KET logic if needed, or unify) - staying consistent with existing
            const newWord: WordEntry = {
              id: `ket-${Date.now()}-${i}`,
              word: item.word.toLowerCase(),
              morphology: { root: item.word },
              meaning: item.phonics_rules_applied.join(', '),
              exampleSentence: item.peppa_pig_sentence,
              story: `In Peppa Pig: "${item.peppa_pig_sentence}"`,
              relatedWords: [],
              category: item.category || 'KET Vocabulary',
              decoratedWord: item.decorated_word,
              phonicsRules: item.phonics_rules_applied,
              testDate: testDate || undefined
            };
            addCustomWord(newWord);
            setResults(prev => [...prev, { word: item.word, status: 'success' }]);
          } else {
            if (!item.word || !item.morphology || !item.meaning) {
              setResults(prev => [...prev, { word: item.word || 'Unknown', status: 'error', message: 'Missing required fields' }]);
              continue;
            }

            const newWord: WordEntry = {
              id: `import-${Date.now()}-${i}`,
              word: item.word.toLowerCase(),
              morphology: {
                prefix: item.morphology.prefix || undefined,
                root: item.morphology.root,
                suffix: item.morphology.suffix || undefined,
              },
              meaning: item.meaning,
              exampleSentence: item.exampleSentence,
              story: item.story,
              relatedWords: [],
              category: item.category || 'Imported',
              testDate: item.testDate || testDate || undefined,
              partOfSpeech: item.partOfSpeech,
              curriculumCategory: item.curriculumCategory,
              curriculumSub: item.curriculumSub,
              decoratedWord: item.decoratedWord,
              phonicsRules: item.phonicsRules || []
            };

            addCustomWord(newWord);
            setResults(prev => [...prev, { word: item.word, status: 'success' }]);
          }
        }
      } catch (err) {
        setResults(prev => [...prev, { word: 'File', status: 'error', message: err instanceof Error ? err.message : 'Failed to parse JSON file' }]);
      } finally {
        setLoading(false);
        if (fileInputRef.current) fileInputRef.current.value = '';
      }
    };
    reader.readAsText(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const words = wordsInput
      .split(/[\n,]+/)
      .map(w => w.trim())
      .filter(w => w.length > 0);

    if (words.length === 0) return;

    setLoading(true);
    setResults([]);
    setProgress({ current: 0, total: words.length });

    for (let i = 0; i < words.length; i++) {
      const targetWord = words[i];
      setCurrentWord(targetWord);
      setProgress(prev => ({ ...prev, current: i + 1 }));

      let attempts = 0;
      const maxAttempts = 3;
      let success = false;

      while (attempts < maxAttempts && !success) {
        try {
          const response = await fetch('/api/generate-word', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ word: targetWord })
          });

          if (!response.ok) {
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
              const errorData = await response.json();
              throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
            } else {
              const text = await response.text();
              console.error("API returned non-JSON response:", text.substring(0, 200));
              throw new Error(`Server Error: Received ${response.status} ${response.statusText}. Please check if the API is correctly configured.`);
            }
          }

          const data = await response.json();

          const newWord: WordEntry = {
            id: `custom-${Date.now()}-${i}`,
            word: targetWord.toLowerCase(),
            morphology: {
              prefix: data.morphology.prefix || undefined,
              root: data.morphology.root,
              suffix: data.morphology.suffix || undefined,
            },
            meaning: data.meaning,
            exampleSentence: data.exampleSentence,
            story: data.story,
            relatedWords: [],
            category: 'Custom Practice',
            testDate: testDate || undefined,
            partOfSpeech: data.partOfSpeech,
            curriculumCategory: data.curriculumCategory,
            curriculumSub: data.curriculumSub,
            decoratedWord: data.decoratedWord,
            phonicsRules: data.phonicsRules
          };

          addCustomWord(newWord);
          const categorization = [
            data.curriculumCategory ? `Expert [${data.curriculumCategory}]` : null,
            data.partOfSpeech ? `POS [${data.partOfSpeech}]` : null
          ].filter(Boolean).join(' • ');

          setResults(prev => [...prev, { 
            word: targetWord, 
            status: 'success',
            message: categorization || 'Generic Practice'
          }]);
          success = true;
        } catch (err) {
          if (attempts >= maxAttempts - 1 || success) {
            console.error(err);
            const errMsg = err instanceof Error ? err.message : 'Failed to generate word';
            setResults(prev => [...prev, { 
              word: targetWord, 
              status: 'error', 
              message: errMsg
            }]);
            break;
          }
          attempts++;
        }
      }
      
      // Base delay between different words to stay under 15 RPM
      if (i < words.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 4000));
      }
    }

    setLoading(false);
    setWordsInput('');
    setCurrentWord('');
  };

  const successCount = results.filter(r => r.status === 'success').length;
  const errorCount = results.filter(r => r.status === 'error').length;

  return (
    <div className="flex-1 flex flex-col pt-12 pb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-4xl font-black text-amber-600 tracking-tight drop-shadow-sm">Teach New Tricks</h2>
        <p className="text-stone-500 font-bold text-lg">Enter multiple words and AI will generate the rest!</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-[2rem] shadow-sm border-2 border-amber-100">
        <div className="space-y-4">
          <div>
            <label className="block text-lg font-bold text-stone-700 mb-2">School Test Date (Optional)</label>
            <input 
              type="date"
              value={testDate}
              onChange={e => setTestDate(e.target.value)}
              disabled={loading}
              className="w-full p-4 text-xl font-bold text-stone-800 bg-amber-50 border-4 border-amber-100 rounded-2xl focus:outline-none focus:border-amber-400 focus:ring-0 transition-all mb-4"
            />

            <label className="block text-lg font-bold text-stone-700 mb-2">Target Words *</label>
            <textarea 
              required 
              rows={5}
              value={wordsInput} 
              onChange={e => setWordsInput(e.target.value)} 
              disabled={loading}
              className="w-full p-4 text-xl font-bold text-stone-800 bg-amber-50 border-4 border-amber-100 rounded-2xl focus:outline-none focus:border-amber-400 focus:ring-0 transition-all placeholder:text-amber-300 placeholder:font-medium resize-none" 
              placeholder="Enter words separated by new lines or commas..." 
            />
            <div className="mt-4 flex items-center gap-4">
              <p className="text-stone-400 text-sm font-medium">Or import from NotebookLM JSON:</p>
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept=".json"
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={loading}
                className="px-4 py-2 bg-stone-200 text-stone-700 rounded-xl font-bold hover:bg-stone-300 transition-all disabled:opacity-50"
              >
                Upload JSON
              </button>
            </div>
          </div>
        </div>

        {loading && (
          <div className="space-y-3">
            <div className="flex justify-between items-center text-amber-600 font-black">
              <span>Processing: {currentWord}</span>
              <span>{progress.current} / {progress.total}</span>
            </div>
            <div className="w-full bg-amber-100 h-4 rounded-full overflow-hidden">
              <div 
                className="bg-amber-500 h-full transition-all duration-500" 
                style={{ width: `${(progress.current / progress.total) * 100}%` }}
              />
            </div>
          </div>
        )}

        {results.length > 0 && !loading && (
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1 bg-emerald-50 border-2 border-emerald-100 p-3 rounded-xl text-center">
                <div className="text-2xl font-black text-emerald-600">{successCount}</div>
                <div className="text-xs font-bold text-emerald-500 uppercase">Success</div>
              </div>
              <div className="flex-1 bg-red-50 border-2 border-red-100 p-3 rounded-xl text-center">
                <div className="text-2xl font-black text-red-600">{errorCount}</div>
                <div className="text-xs font-bold text-red-500 uppercase">Errors</div>
              </div>
            </div>

            <div className="max-h-40 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
              {results.map((res, idx) => (
                <div 
                  key={idx} 
                  className={`flex justify-between items-center p-3 rounded-xl border-2 ${
                    res.status === 'success' ? 'bg-emerald-50 border-emerald-100' : 'bg-red-50 border-red-100'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-bold text-stone-700">{res.word}</span>
                    {res.status === 'success' && res.message && (
                      <span className="text-[10px] font-black text-amber-500 uppercase tracking-tighter">
                        {res.message}
                      </span>
                    )}
                  </div>
                  {res.status === 'success' ? (
                    <span className="text-emerald-600 text-xs font-black uppercase">Added</span>
                  ) : (
                    <span className="text-red-500 text-[10px] font-bold max-w-[150px] truncate" title={res.message}>
                      {res.message}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <button 
          type="submit" 
          disabled={loading || !wordsInput.trim()}
          className="w-full py-4 bg-amber-500 text-white rounded-2xl text-xl font-bold hover:bg-amber-600 transition-all active:scale-95 shadow-md hover:shadow-lg hover:-translate-y-1 mt-4 disabled:opacity-50 disabled:active:scale-100 disabled:hover:-translate-y-0 disabled:hover:shadow-none flex justify-center items-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
              Teaching Tricks...
            </>
          ) : (
            '+ Teach All'
          )}
        </button>
      </form>

      {/* Word Management Section */}
      <div className="mt-12 space-y-6">
        <div className="flex justify-between items-center px-4">
          <h3 className="text-2xl font-black text-stone-800">Existing Words</h3>
          <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-bold">
            {customWords.length} Total
          </span>
        </div>

        <div className="relative group p-4">
          <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
          <input 
            type="text"
            placeholder="Search your words..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border-2 border-stone-100 rounded-2xl focus:border-amber-400 outline-none transition-all shadow-sm"
          />
        </div>

        <div className="space-y-3 px-1">
          {filteredWords.map((word) => {
            const isMastered = masteredWords.includes(word.id);
            return (
              <div 
                key={word.id}
                className="bg-white p-4 rounded-3xl border-2 border-stone-50 shadow-sm flex items-center justify-between group"
              >
                <div className="flex-1 min-w-0 pr-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-black text-lg text-stone-800 truncate">{word.word}</span>
                    {word.testDate && (
                      <span className="bg-indigo-50 text-indigo-600 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                        {word.testDate}
                      </span>
                    )}
                  </div>
                  <p className="text-stone-500 text-sm line-clamp-1">{word.meaning}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => isMastered ? removeMasteredWord(word.id) : addMasteredWord(word.id)}
                    className={clsx(
                      "p-3 rounded-2xl transition-all active:scale-90",
                      isMastered ? "bg-emerald-100 text-emerald-600" : "bg-stone-50 text-stone-300 hover:text-stone-400"
                    )}
                    aria-label={isMastered ? "Mark as unlearned" : "Mark as learned"}
                  >
                    {isMastered ? <CheckCircle size={24} strokeWidth={2.5} /> : <Circle size={24} strokeWidth={2.5} />}
                  </button>

                  <button
                    onClick={() => {
                      if (confirm(`Forget "${word.word}" forever?`)) {
                        deleteWord(word.id);
                      }
                    }}
                    className="p-3 bg-red-50 text-red-400 rounded-2xl hover:text-red-600 transition-all active:scale-90"
                    aria-label="Delete word"
                  >
                    <Trash2 size={24} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            );
          })}

          {filteredWords.length === 0 && (
            <div className="text-center py-12 text-stone-400 bg-white/50 rounded-[2rem] border-2 border-dashed border-stone-100">
              <p className="font-bold">No words found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
