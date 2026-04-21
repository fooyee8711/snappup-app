import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CURRICULUM_RULES } from '../data/rules';
import * as Icons from 'lucide-react';
import { ChevronRight } from 'lucide-react';

export const SpecialCollection: React.FC = () => {
  const navigate = useNavigate();
  const specialCategories = CURRICULUM_RULES.filter(cat => cat.isSpecial);

  return (
    <div className="max-w-2xl mx-auto space-y-8 pb-12">
      <div className="text-center space-y-2 py-4">
        <h1 className="text-4xl font-black text-indigo-600 tracking-tight">The Collector's Vault</h1>
        <p className="text-stone-500 font-bold text-lg">Special modules for elite learners</p>
      </div>

      <div className="grid gap-6">
        {specialCategories.map((cat, idx) => {
          const Icon = (Icons as any)[cat.icon] || Icons.Sparkles;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`p-1 rounded-[2.5rem] ${cat.borderColor} border-2 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className={`p-6 rounded-[2.2rem] ${cat.lightColor}`}>
                <div className="flex items-center gap-4">
                  <div className={`p-4 ${cat.color} text-white rounded-2xl shadow-lg`}>
                    <Icon size={32} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-black text-stone-800 tracking-tight">{cat.title}</h2>
                    <p className="text-stone-600 font-medium leading-tight">{cat.description}</p>
                  </div>
                  <button
                    onClick={() => navigate(`/learn?type=curriculum&category=${cat.id}`)}
                    className="p-4 bg-white rounded-2xl border-2 border-stone-100 hover:border-amber-400 hover:shadow-md transition-all group active:scale-95"
                  >
                    <ChevronRight size={24} className="text-stone-300 group-hover:text-amber-500 transition-colors" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
