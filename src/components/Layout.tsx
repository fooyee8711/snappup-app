import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Settings, User, LogOut } from 'lucide-react';
import { useProgress } from '../store/progress';
import { signInWithGoogle, auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, loading } = useProgress();

  const handleAuth = async () => {
    if (user) {
      if (confirm('Sign out?')) {
        await signOut(auth);
      }
    } else {
      await signInWithGoogle();
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 text-stone-800 font-sans selection:bg-amber-200">
      <div className="flex justify-between items-center p-4">
        <div>
          {location.pathname !== '/' && (
            <button
              onClick={() => navigate(-1)}
              className="p-3 text-stone-500 hover:bg-amber-200 hover:text-stone-800 rounded-full transition-all active:scale-90"
              aria-label="go back"
            >
              <ArrowLeft size={28} strokeWidth={2.5} />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          {!loading && (
            <button
              onClick={handleAuth}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all active:scale-95 ${
                user 
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                  : 'bg-amber-200 text-amber-900 border border-amber-300'
              }`}
            >
              {user ? (
                <>
                  <img 
                    src={user.photoURL || ''} 
                    alt="" 
                    className="w-5 h-5 rounded-full" 
                    referrerPolicy="no-referrer"
                  />
                  <span className="max-w-[80px] truncate">{user.displayName?.split(' ')[0]}</span>
                </>
              ) : (
                <>
                  <User size={16} />
                  <span>Log In</span>
                </>
              )}
            </button>
          )}

          {location.pathname !== '/settings' && (
            <button
              onClick={() => navigate('/settings')}
              className="p-3 text-stone-500 hover:bg-amber-200 hover:text-stone-800 rounded-full transition-all active:scale-90"
              aria-label="settings"
            >
              <Settings size={28} strokeWidth={2.5} />
            </button>
          )}
        </div>
      </div>

      <main className="max-w-md mx-auto min-h-screen flex flex-col p-6 pt-0">
        {children}
      </main>
    </div>
  );
};
