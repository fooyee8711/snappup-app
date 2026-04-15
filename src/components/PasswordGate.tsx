import React, { useState } from 'react';

interface Props {
  onSuccess: () => void;
}

export const PasswordGate: React.FC<Props> = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPassword = import.meta.env.VITE_APP_PASSWORD;
    
    if (password === correctPassword) {
      localStorage.setItem('app_authenticated', 'true');
      onSuccess();
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="fixed inset-0 bg-amber-50 flex items-center justify-center z-[9999] p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-[2.5rem] shadow-xl border-4 border-amber-100 text-center space-y-8 animate-in fade-in zoom-in duration-300">
        <div className="space-y-2">
          <h1 className="text-4xl font-black text-amber-600 tracking-tight">SnapPup 🐶</h1>
          <p className="text-stone-500 font-bold">Please enter the secret password to enter</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="Secret Password"
            className={`w-full p-4 text-center text-xl font-bold rounded-2xl border-4 transition-all outline-none ${
              error 
                ? 'border-red-200 bg-red-50 text-red-600 animate-shake' 
                : 'border-amber-100 bg-amber-50 text-stone-800 focus:border-amber-400'
            }`}
            autoFocus
          />
          {error && (
            <p className="text-red-500 font-bold text-sm">Oops! That's not the right bone. 🦴</p>
          )}
          <button
            type="submit"
            className="w-full py-4 bg-amber-500 text-white rounded-2xl text-xl font-bold hover:bg-amber-600 transition-all active:scale-95 shadow-md"
          >
            Unlock 🔓
          </button>
        </form>
      </div>
    </div>
  );
};
