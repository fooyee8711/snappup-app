import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Settings } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-amber-50 text-stone-800 font-sans selection:bg-amber-200">
      {location.pathname !== '/' && (
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 p-3 text-stone-500 hover:bg-amber-200 hover:text-stone-800 rounded-full transition-all active:scale-90 z-10"
          aria-label="go back"
        >
          <ArrowLeft size={28} strokeWidth={2.5} />
        </button>
      )}
      
      {location.pathname !== '/settings' && (
        <button
          onClick={() => navigate('/settings')}
          className="absolute top-4 right-4 p-3 text-stone-500 hover:bg-amber-200 hover:text-stone-800 rounded-full transition-all active:scale-90 z-10"
          aria-label="settings"
        >
          <Settings size={28} strokeWidth={2.5} />
        </button>
      )}

      <main className="max-w-md mx-auto min-h-screen flex flex-col p-6">
        {children}
      </main>
    </div>
  );
};
