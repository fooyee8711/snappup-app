import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Layers, 
  Type, 
  Music, 
  Shuffle,
  ChevronRight
} from 'lucide-react';

const CATEGORIES = [
  {
    id: 'Prefixes',
    title: 'Prefixes',
    description: 'Learn how to change meanings using dis- and mis-.',
    icon: Layers,
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
    subs: [
      'un- (Not)', 're- (Again)', 'dis- (Negative)', 'mis- (Negative)', 'pre- (Before)', 'in-/im- (Not)', 'non- (Not)', 'over- (Too much)', 'sub- (Under)'
    ]
  },
  {
    id: 'Suffixes',
    title: 'Suffixes & Adverbs',
    description: 'Master -ly and common suffixes like -ful, -less.',
    icon: Type,
    color: 'bg-pink-500',
    lightColor: 'bg-pink-50',
    borderColor: 'border-pink-100',
    subs: [
      "-ly (No change)", "-ly (y to ily)", "-ly (le to ly)", "-ly (ic/al to ally)", "-ly (Exceptions)",
      "-ful (Full of)", "-less (Without)", "-ness (State)", "-ment (Action)", "-able (Can be)"
    ]
  },
  {
    id: 'Phonics',
    title: 'Phonics & Spelling',
    description: 'Tricky spelling rules for common sounds.',
    icon: Music,
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50',
    borderColor: 'border-purple-100',
    subs: ["Short /u/ as 'o'", "Short /i/ as 'y'", "Long /a/ as 'ey'", "Long /a/ as 'ai'", "Long /a/ as 'ei'", "Sound /ur/ as 'ear'", "Sound /k/ as 'ch'", "gue / que", "-ary"]
  },
  {
    id: 'Homophones',
    title: 'Homophones',
    description: 'Words that sound the same but mean different things.',
    icon: Shuffle,
    color: 'bg-amber-500',
    lightColor: 'bg-amber-50',
    borderColor: 'border-amber-100',
    subs: ["Set 1", "Set 2", "Set 3"]
  }
];

export const CurriculumMap: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto space-y-8 pb-12">
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-stone-800 tracking-tight">Expert Training</h1>
          <p className="text-stone-500 font-bold">Master the rules of the Warrior Clan</p>
        </div>
      </div>

      <div className="grid gap-6">
        {CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`p-1 rounded-[2.5rem] ${cat.borderColor} border-2 overflow-hidden bg-white shadow-sm`}
          >
            <div className={`p-6 rounded-[2.2rem] ${cat.lightColor}`}>
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-4 ${cat.color} text-white rounded-2xl shadow-lg`}>
                  <cat.icon size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-stone-800 tracking-tight">{cat.title}</h2>
                  <p className="text-stone-600 font-medium leading-tight mt-1">{cat.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.subs.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => navigate(`/learn?type=curriculum&category=${cat.id}&sub=${encodeURIComponent(sub)}`)}
                    className="flex items-center justify-between p-4 bg-white rounded-2xl border-2 border-stone-100 hover:border-amber-400 hover:shadow-md transition-all group active:scale-95"
                  >
                    <span className="font-bold text-stone-700 text-left">{sub}</span>
                    <ChevronRight size={18} className="text-stone-300 group-hover:text-amber-500 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
