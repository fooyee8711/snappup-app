import React, { createContext, useContext, useState, useEffect } from 'react';
import { words, WordEntry } from '../data/words';

interface ProgressContextType {
  masteredWords: string[];
  dailyWords: string[];
  customWords: WordEntry[];
  dailyWordCount: number;
  mistakeCounts: Record<string, number>;
  dailyStats: Record<string, number>;
  addMasteredWord: (id: string) => void;
  addMasteredWords: (ids: string[]) => void;
  removeMasteredWord: (id: string) => void;
  resetWord: (id: string) => void;
  deleteWord: (id: string) => void;
  deleteMode: (mode: string) => void;
  getCurriculumWords: (category: string, sub?: string) => WordEntry[];
  incrementMistake: (id: string) => void;
  setDailyWordCount: (count: number) => void;
  getReviewWords: () => WordEntry[];
  getStandardReviewWords: () => WordEntry[];
  getCustomUnmasteredWords: () => WordEntry[];
  getCustomReviewWords: () => WordEntry[];
  getDailyWords: () => WordEntry[];
  getWordsByDate: (date: string) => WordEntry[];
  getAllWords: () => WordEntry[];
  addCustomWord: (word: WordEntry) => void;
  dailyCompletedAt: number | null;
  markDailyComplete: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [masteredWords, setMasteredWords] = useState<string[]>(() => {
    const saved = localStorage.getItem('masteredWords');
    return saved ? JSON.parse(saved) : [];
  });

  const [customWords, setCustomWords] = useState<WordEntry[]>(() => {
    const saved = localStorage.getItem('customWords');
    return saved ? JSON.parse(saved) : [];
  });

  const [dailyWordCount, setDailyWordCountState] = useState<number>(() => {
    const saved = localStorage.getItem('dailyWordCount');
    return saved ? parseInt(saved, 10) : 5;
  });

  const [mistakeCounts, setMistakeCounts] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('mistakeCounts');
    return saved ? JSON.parse(saved) : {};
  });

  const [dailyStats, setDailyStats] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('dailyStats');
    return saved ? JSON.parse(saved) : {};
  });

  const [dailyWords, setDailyWords] = useState<string[]>(() => {
    const saved = localStorage.getItem('dailyWords');
    const savedDate = localStorage.getItem('dailyDate');
    const today = new Date().toDateString();
    const savedMastered = localStorage.getItem('masteredWords');
    const mastered = savedMastered ? JSON.parse(savedMastered) : [];
    
    const savedCustom = localStorage.getItem('customWords');
    const customWordsList = savedCustom ? JSON.parse(savedCustom) : [];
    const allAvailableWords = [...words, ...customWordsList];

    const savedCount = localStorage.getItem('dailyWordCount');
    const count = savedCount ? parseInt(savedCount, 10) : 5;

    if (saved && savedDate === today) {
      return JSON.parse(saved);
    } else {
      const unmastered = allAvailableWords.filter(w => !mastered.includes(w.id));
      const shuffled = [...unmastered].sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, count).map(w => w.id);
      const finalSelection = selected.length > 0 ? selected : allAvailableWords.slice(0, count).map(w => w.id);
      
      localStorage.setItem('dailyWords', JSON.stringify(finalSelection));
      localStorage.setItem('dailyDate', today);
      return finalSelection;
    }
  });

  const [dailyCompletedAt, setDailyCompletedAt] = useState<number | null>(() => {
    const saved = localStorage.getItem('dailyCompletedAt');
    return saved ? parseInt(saved, 10) : null;
  });

  const markDailyComplete = () => {
    const now = Date.now();
    setDailyCompletedAt(now);
    localStorage.setItem('dailyCompletedAt', now.toString());
  };

  useEffect(() => {
    localStorage.setItem('masteredWords', JSON.stringify(masteredWords));
  }, [masteredWords]);

  useEffect(() => {
    localStorage.setItem('customWords', JSON.stringify(customWords));
  }, [customWords]);

  useEffect(() => {
    localStorage.setItem('dailyWordCount', dailyWordCount.toString());
  }, [dailyWordCount]);

  useEffect(() => {
    localStorage.setItem('mistakeCounts', JSON.stringify(mistakeCounts));
  }, [mistakeCounts]);

  useEffect(() => {
    localStorage.setItem('dailyStats', JSON.stringify(dailyStats));
  }, [dailyStats]);

  const addMasteredWord = (id: string) => {
    setMasteredWords((prev) => {
      if (!prev.includes(id)) {
        const today = new Date().toDateString();
        setDailyStats(stats => ({
          ...stats,
          [today]: (stats[today] || 0) + 1
        }));
        return [...prev, id];
      }
      return prev;
    });
  };

  const addMasteredWords = (ids: string[]) => {
    setMasteredWords((prev) => {
      const newWords = ids.filter(id => !prev.includes(id));
      if (newWords.length > 0) {
        const today = new Date().toDateString();
        setDailyStats(stats => ({
          ...stats,
          [today]: (stats[today] || 0) + newWords.length
        }));
        return [...prev, ...newWords];
      }
      return prev;
    });
  };

  const removeMasteredWord = (id: string) => {
    setMasteredWords((prev) => prev.filter(w => w !== id));
  };

  const resetWord = (id: string) => {
    setMasteredWords((prev) => prev.filter(w => w !== id));
    setMistakeCounts(prev => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const deleteWord = (id: string) => {
    setCustomWords(prev => prev.filter(w => w.id !== id));
    setMasteredWords(prev => prev.filter(w => w !== id));
    setMistakeCounts(prev => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const deleteMode = (mode: string) => {
    if (mode === 'daily') {
      // For daily, we just clear the mastered words that are in the standard set
      setMasteredWords(prev => prev.filter(id => !words.find(w => w.id === id)));
    } else if (mode === 'custom') {
      // For custom, we delete the custom words themselves
      const customIds = customWords.map(w => w.id);
      setCustomWords([]);
      setMasteredWords(prev => prev.filter(id => !customIds.includes(id)));
    }
  };

  const incrementMistake = (id: string) => {
    setMistakeCounts(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const setDailyWordCount = (count: number) => {
    setDailyWordCountState(count);
    
    // Also update dailyWords if it's for today to reflect the change immediately
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem('dailyDate');
    
    if (savedDate === today) {
      setDailyWords(prev => {
        const allAvailableWords = [...words, ...customWords];
        const unmastered = allAvailableWords.filter(w => !masteredWords.includes(w.id));
        
        if (count > prev.length) {
          // Add more words if count increased
          const additionalNeeded = count - prev.length;
          const remainingUnmastered = unmastered.filter(w => !prev.includes(w.id));
          const shuffled = [...remainingUnmastered].sort(() => Math.random() - 0.5);
          const newWords = shuffled.slice(0, additionalNeeded).map(w => w.id);
          const final = [...prev, ...newWords];
          localStorage.setItem('dailyWords', JSON.stringify(final));
          return final;
        } else if (count < prev.length) {
          // Reduce words if count decreased
          const final = prev.slice(0, count);
          localStorage.setItem('dailyWords', JSON.stringify(final));
          return final;
        }
        return prev;
      });
    } else {
      // If it's a new day or no words set yet, they will be generated on next access or refresh
      // But we can trigger generation now if we want
      const allAvailableWords = [...words, ...customWords];
      const unmastered = allAvailableWords.filter(w => !masteredWords.includes(w.id));
      const shuffled = [...unmastered].sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, count).map(w => w.id);
      const finalSelection = selected.length > 0 ? selected : allAvailableWords.slice(0, count).map(w => w.id);
      
      setDailyWords(finalSelection);
      localStorage.setItem('dailyWords', JSON.stringify(finalSelection));
      localStorage.setItem('dailyDate', today);
    }
  };

  const getAllWords = () => {
    return [...words, ...customWords];
  };

  const getReviewWords = () => {
    return getAllWords().filter((w) => masteredWords.includes(w.id));
  };

  const getStandardReviewWords = () => {
    return words.filter((w) => masteredWords.includes(w.id));
  };

  const getCustomUnmasteredWords = () => {
    return customWords.filter((w) => !masteredWords.includes(w.id));
  };

  const getCustomReviewWords = () => {
    return customWords.filter((w) => masteredWords.includes(w.id));
  };

  const getDailyWords = () => {
    return getAllWords().filter((w) => dailyWords.includes(w.id));
  };

  const getWordsByDate = (date: string) => {
    return getAllWords().filter(w => w.testDate === date);
  };

  const getCurriculumWords = (category: string, sub?: string) => {
    return getAllWords().filter(w => 
      w.curriculumCategory === category && 
      (!sub || w.curriculumSub === sub)
    );
  };

  const addCustomWord = (word: WordEntry) => {
    setCustomWords(prev => [...prev, word]);
  };

  return (
    <ProgressContext.Provider value={{ 
      masteredWords, 
      dailyWords, 
      customWords,
      dailyWordCount,
      mistakeCounts,
      dailyStats,
      addMasteredWord, 
      addMasteredWords, 
      removeMasteredWord, 
      resetWord,
      deleteWord,
      deleteMode,
      getCurriculumWords,
      incrementMistake,
      setDailyWordCount,
      getReviewWords, 
      getStandardReviewWords,
      getCustomUnmasteredWords,
      getCustomReviewWords,
      getDailyWords,
      getWordsByDate,
      getAllWords,
      addCustomWord,
      dailyCompletedAt,
      markDailyComplete
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
