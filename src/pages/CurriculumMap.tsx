import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CURRICULUM_RULES } from '../data/rules';
import * as Icons from 'lucide-react';
import { 
  ArrowLeft, 
  ChevronRight
} from 'lucide-react';

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
        {CURRICULUM_RULES.map((cat, idx) => {
          const Icon = (Icons as any)[cat.icon] || Icons.Layers;
          return (
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
                    <Icon size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-stone-800 tracking-tight">{cat.title}</h2>
                    <p className="text-stone-600 font-medium leading-tight mt-1">{cat.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.rules.map((rule) => (
                    <button
                      key={rule.name}
                      onClick={() => navigate(`/learn?type=curriculum&category=${cat.id}&sub=${encodeURIComponent(rule.name)}`)}
                      className="flex flex-col p-4 bg-white rounded-2xl border-2 border-stone-100 hover:border-amber-400 hover:shadow-md transition-all group active:scale-95"
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className="font-bold text-stone-700 text-left">{rule.name}</span>
                        <ChevronRight size={18} className="text-stone-300 group-hover:text-amber-500 transition-colors" />
                      </div>
                      <p className="text-[10px] text-stone-400 font-medium text-left line-clamp-1">{rule.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
