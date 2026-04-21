import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { words, WordEntry } from '../data/words';
import { auth, db } from '../lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc, setDoc, collection, getDocs, deleteDoc, writeBatch } from 'firebase/firestore';

interface ProgressContextType {
  user: User | null;
  loading: boolean;
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
  lastSession: { path: string; wordId: string; loop: number; step: string; isTesting: boolean; timestamp: number } | null;
  updateLastSession: (path: string, wordId: string, loop: number, step: string, isTesting: boolean) => void;
  clearLastSession: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const [masteredWords, setMasteredWords] = useState<string[]>([]);
  const [customWords, setCustomWords] = useState<WordEntry[]>([]);
  const [dailyWordCount, setDailyWordCountState] = useState<number>(5);
  const [mistakeCounts, setMistakeCounts] = useState<Record<string, number>>({});
  const [dailyStats, setDailyStats] = useState<Record<string, number>>({});
  const [dailyWords, setDailyWords] = useState<string[]>([]);
  const [dailyCompletedAt, setDailyCompletedAt] = useState<number | null>(null);
  const [lastSession, setLastSession] = useState<{ path: string; wordId: string; loop: number; step: string; isTesting: boolean; timestamp: number } | null>(null);

  // Sync utilities
  const syncProfile = useCallback(async (updates: Partial<any>) => {
    if (auth.currentUser) {
      try {
        await setDoc(doc(db, 'users', auth.currentUser.uid), updates, { merge: true });
      } catch (error) {
        console.error("Error syncing profile to Firestore", error);
      }
    }
  }, []);

  const loadLocalData = useCallback(() => {
    const mastered = localStorage.getItem('masteredWords');
    const custom = localStorage.getItem('customWords');
    const count = localStorage.getItem('dailyWordCount');
    const mistakes = localStorage.getItem('mistakeCounts');
    const stats = localStorage.getItem('dailyStats');
    const daily = localStorage.getItem('dailyWords');
    const completedAt = localStorage.getItem('dailyCompletedAt');
    const session = localStorage.getItem('lastSession');

    setMasteredWords(mastered ? JSON.parse(mastered) : []);
    setCustomWords(custom ? JSON.parse(custom) : []);
    setDailyWordCountState(count ? parseInt(count, 10) : 5);
    setMistakeCounts(mistakes ? JSON.parse(mistakes) : {});
    setDailyStats(stats ? JSON.parse(stats) : {});
    setDailyWords(daily ? JSON.parse(daily) : []);
    setDailyCompletedAt(completedAt ? parseInt(completedAt, 10) : null);
    setLastSession(session ? JSON.parse(session) : null);
  }, []);

  const loadUserData = useCallback(async (u: User) => {
    try {
      const userDoc = await getDoc(doc(db, 'users', u.uid));
      const customWordsSnap = await getDocs(collection(db, 'users', u.uid, 'custom_words'));
      
      const firestoreCustomWords = customWordsSnap.docs.map(doc => doc.data() as WordEntry);

      if (userDoc.exists()) {
        const data = userDoc.data();
        setMasteredWords(data.masteredWords || []);
        setDailyWordCountState(data.dailyWordCount || 5);
        setMistakeCounts(data.mistakeCounts || {});
        setDailyStats(data.dailyStats || {});
        setDailyWords(data.dailyWords || []);
        setDailyCompletedAt(data.dailyCompletedAt || null);
        setLastSession(data.lastSession || null);
        setCustomWords(firestoreCustomWords);
      } else {
        // Initial migration
        const localMastered = JSON.parse(localStorage.getItem('masteredWords') || '[]');
        const localCustom = JSON.parse(localStorage.getItem('customWords') || '[]');
        const localCount = parseInt(localStorage.getItem('dailyWordCount') || '5', 10);
        const localMistakes = JSON.parse(localStorage.getItem('mistakeCounts') || '{}');
        const localStats = JSON.parse(localStorage.getItem('dailyStats') || '{}');
        const localDaily = JSON.parse(localStorage.getItem('dailyWords') || '[]');
        const localCompletedAt = parseInt(localStorage.getItem('dailyCompletedAt') || '0', 10);
        const localSession = JSON.parse(localStorage.getItem('lastSession') || 'null');

        const userData = {
          masteredWords: localMastered,
          dailyWordCount: localCount,
          mistakeCounts: localMistakes,
          dailyStats: localStats,
          dailyWords: localDaily,
          dailyCompletedAt: localCompletedAt || null,
          dailyDate: localStorage.getItem('dailyDate') || new Date().toDateString(),
          lastSession: localSession
        };

        await setDoc(doc(db, 'users', u.uid), userData);
        
        const batch = writeBatch(db);
        localCustom.forEach((word: WordEntry) => {
          const wordRef = doc(db, 'users', u.uid, 'custom_words', word.id);
          batch.set(wordRef, word);
        });
        await batch.commit();

        setMasteredWords(localMastered);
        setCustomWords(localCustom);
        setDailyWordCountState(localCount);
        setMistakeCounts(localMistakes);
        setDailyStats(localStats);
        setDailyWords(localDaily);
        setDailyCompletedAt(userData.dailyCompletedAt);
        setLastSession(localSession);
      }
    } catch (error) {
      console.error("Error loading user data", error);
      loadLocalData();
    }
  }, [loadLocalData]);

  // Auth Effect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) await loadUserData(u);
      else loadLocalData();
      setLoading(false);
    });
    return unsubscribe;
  }, [loadUserData, loadLocalData]);

  // Persistent fallbacks (LocalStorage)
  useEffect(() => {
    if (!loading) localStorage.setItem('masteredWords', JSON.stringify(masteredWords));
  }, [masteredWords, loading]);

  useEffect(() => {
    if (!loading) localStorage.setItem('customWords', JSON.stringify(customWords));
  }, [customWords, loading]);

  useEffect(() => {
    if (!loading) localStorage.setItem('dailyWordCount', dailyWordCount.toString());
  }, [dailyWordCount, loading]);

  useEffect(() => {
    if (!loading) localStorage.setItem('mistakeCounts', JSON.stringify(mistakeCounts));
  }, [mistakeCounts, loading]);

  useEffect(() => {
    if (!loading) localStorage.setItem('dailyStats', JSON.stringify(dailyStats));
  }, [dailyStats, loading]);

  useEffect(() => {
    if (!loading) {
      if (lastSession) {
        localStorage.setItem('lastSession', JSON.stringify(lastSession));
      } else {
        localStorage.removeItem('lastSession');
      }
    }
  }, [lastSession, loading]);

  const updateLastSession = useCallback((path: string, wordId: string, loop: number, step: string, isTesting: boolean) => {
    const session = { path, wordId, loop, step, isTesting, timestamp: Date.now() };
    setLastSession(session);
    syncProfile({ lastSession: session });
  }, [syncProfile]);

  const clearLastSession = useCallback(() => {
    setLastSession(null);
    syncProfile({ lastSession: null });
  }, [syncProfile]);

  const addMasteredWord = useCallback((id: string) => {
    setMasteredWords((prev) => {
      if (!prev.includes(id)) {
        const today = new Date().toDateString();
        const newStats = { ...dailyStats, [today]: (dailyStats[today] || 0) + 1 };
        const newMastered = [...prev, id];
        
        setDailyStats(newStats);
        syncProfile({ masteredWords: newMastered, dailyStats: newStats });
        return newMastered;
      }
      return prev;
    });
  }, [dailyStats, syncProfile]);

  const addMasteredWords = useCallback((ids: string[]) => {
    setMasteredWords((prev) => {
      const newWords = ids.filter(id => !prev.includes(id));
      if (newWords.length > 0) {
        const today = new Date().toDateString();
        const newStats = { ...dailyStats, [today]: (dailyStats[today] || 0) + newWords.length };
        const newMastered = [...prev, ...newWords];

        setDailyStats(newStats);
        syncProfile({ masteredWords: newMastered, dailyStats: newStats });
        return newMastered;
      }
      return prev;
    });
  }, [dailyStats, syncProfile]);

  const removeMasteredWord = useCallback((id: string) => {
    setMasteredWords((prev) => {
      const filtered = prev.filter(w => w !== id);
      syncProfile({ masteredWords: filtered });
      return filtered;
    });
  }, [syncProfile]);

  const resetWord = useCallback((id: string) => {
    setMasteredWords((prev) => {
      const filtered = prev.filter(w => w !== id);
      syncProfile({ masteredWords: filtered });
      return filtered;
    });
    setMistakeCounts(prev => {
      const next = { ...prev };
      delete next[id];
      syncProfile({ mistakeCounts: next });
      return next;
    });
  }, [syncProfile]);

  const deleteWord = useCallback(async (id: string) => {
    setCustomWords(prev => {
      const filtered = prev.filter(w => w.id !== id);
      if (user) {
        deleteDoc(doc(db, 'users', user.uid, 'custom_words', id)).catch(console.error);
      }
      return filtered;
    });
    setMasteredWords(prev => {
      const filtered = prev.filter(w => w !== id);
      syncProfile({ masteredWords: filtered });
      return filtered;
    });
    setMistakeCounts(prev => {
      const next = { ...prev };
      delete next[id];
      syncProfile({ mistakeCounts: next });
      return next;
    });
  }, [user, syncProfile]);

  const deleteMode = useCallback(async (mode: string) => {
    if (mode === 'daily') {
      const newMastered = masteredWords.filter(id => !words.find(w => w.id === id));
      setMasteredWords(newMastered);
      syncProfile({ masteredWords: newMastered });
    } else if (mode === 'custom') {
      const customIds = customWords.map(w => w.id);
      setCustomWords([]);
      const newMastered = masteredWords.filter(id => !customIds.includes(id));
      setMasteredWords(newMastered);
      syncProfile({ masteredWords: newMastered });

      if (user) {
        const batch = writeBatch(db);
        customIds.forEach(id => {
          batch.delete(doc(db, 'users', user.uid, 'custom_words', id));
        });
        await batch.commit();
      }
    }
  }, [user, masteredWords, customWords, syncProfile]);

  const incrementMistake = useCallback((id: string) => {
    setMistakeCounts(prev => {
      const next = { ...prev, [id]: (prev[id] || 0) + 1 };
      syncProfile({ mistakeCounts: next });
      return next;
    });
  }, [syncProfile]);

  const setDailyWordCount = useCallback((count: number) => {
    setDailyWordCountState(count);
    syncProfile({ dailyWordCount: count });
    
    const today = new Date().toDateString();
    setDailyWords(prev => {
      const allAvailableWords = [...words, ...customWords];
      const unmastered = allAvailableWords.filter(w => !masteredWords.includes(w.id));
      
      let final;
      if (count > prev.length) {
        const additionalNeeded = count - prev.length;
        const remainingUnmastered = unmastered.filter(w => !prev.includes(w.id));
        const shuffled = [...remainingUnmastered].sort(() => Math.random() - 0.5);
        const newWords = shuffled.slice(0, additionalNeeded).map(w => w.id);
        final = [...prev, ...newWords];
      } else if (count < prev.length) {
        final = prev.slice(0, count);
      } else {
        final = prev;
      }
      
      localStorage.setItem('dailyWords', JSON.stringify(final));
      localStorage.setItem('dailyDate', today);
      syncProfile({ dailyWords: final, dailyDate: today });
      return final;
    });
  }, [customWords, masteredWords, syncProfile]);

  const getAllWords = useCallback(() => [...words, ...customWords], [customWords]);
  const getReviewWords = useCallback(() => getAllWords().filter((w) => masteredWords.includes(w.id)), [getAllWords, masteredWords]);
  const getStandardReviewWords = useCallback(() => words.filter((w) => masteredWords.includes(w.id)), [masteredWords]);
  const getCustomUnmasteredWords = useCallback(() => customWords.filter((w) => !masteredWords.includes(w.id)), [customWords, masteredWords]);
  const getCustomReviewWords = useCallback(() => customWords.filter((w) => masteredWords.includes(w.id)), [customWords, masteredWords]);
  const getDailyWords = useCallback(() => getAllWords().filter((w) => dailyWords.includes(w.id)), [getAllWords, dailyWords]);
  const getWordsByDate = useCallback((date: string) => getAllWords().filter(w => w.testDate === date), [getAllWords]);
  const getCurriculumWords = useCallback((category: string, sub?: string) => getAllWords().filter(w => 
    w.curriculumCategory === category && (!sub || w.curriculumSub === sub)
  ), [getAllWords]);

  const addCustomWord = useCallback(async (word: WordEntry) => {
    setCustomWords(prev => [...prev, word]);
    if (user) {
      try {
        await setDoc(doc(db, 'users', user.uid, 'custom_words', word.id), word);
      } catch (error) {
        console.error("Error saving custom word to Firestore", error);
      }
    }
  }, [user]);

  const markDailyComplete = useCallback(() => {
    const now = Date.now();
    setDailyCompletedAt(now);
    localStorage.setItem('dailyCompletedAt', now.toString());
    syncProfile({ dailyCompletedAt: now });
  }, [syncProfile]);

  const value = useMemo(() => ({
    user,
    loading,
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
    markDailyComplete,
    lastSession,
    updateLastSession,
    clearLastSession
  }), [
    user, loading, masteredWords, dailyWords, customWords, dailyWordCount, mistakeCounts, dailyStats,
    addMasteredWord, addMasteredWords, removeMasteredWord, resetWord, deleteWord, deleteMode,
    getCurriculumWords, incrementMistake, setDailyWordCount, getReviewWords, getStandardReviewWords,
    getCustomUnmasteredWords, getCustomReviewWords, getDailyWords, getWordsByDate, getAllWords,
    addCustomWord, dailyCompletedAt, markDailyComplete, lastSession, updateLastSession, clearLastSession
  ]);

  return (
    <ProgressContext.Provider value={value}>
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
