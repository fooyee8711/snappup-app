import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../store/progress';
import { Praise } from '../components/Praise';

interface Question {
  text: string;
  answer: number;
}

const generateQuestion = (): Question => {
  const ops = ['+', '-', '×', '÷'];
  const op = ops[Math.floor(Math.random() * ops.length)];
  let a = 0, b = 0, answer = 0;

  if (op === '+') {
    a = Math.floor(Math.random() * 20) + 1;
    b = Math.floor(Math.random() * 20) + 1;
    answer = a + b;
  } else if (op === '-') {
    b = Math.floor(Math.random() * 20) + 1;
    answer = Math.floor(Math.random() * 20) + 1;
    a = b + answer;
  } else if (op === '×') {
    a = Math.floor(Math.random() * 10) + 2;
    b = Math.floor(Math.random() * 10) + 2;
    answer = a * b;
  } else if (op === '÷') {
    b = Math.floor(Math.random() * 10) + 2;
    answer = Math.floor(Math.random() * 10) + 2;
    a = b * answer;
  }

  return { text: `${a} ${op} ${b}`, answer };
};

export const Detector: React.FC = () => {
  const navigate = useNavigate();
  const { completeDetector } = useProgress();
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showPraise, setShowPraise] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const newQuestions = Array.from({ length: 5 }, generateQuestion);
    setQuestions(newQuestions);
  }, []);

  useEffect(() => {
    if (inputRef.current && !showPraise) {
      inputRef.current.focus();
    }
  }, [currentIndex, showPraise]);

  if (questions.length === 0) return null;

  const currentQuestion = questions[currentIndex];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numInput = parseInt(input, 10);
    
    if (numInput === currentQuestion.answer) {
      setIsCorrect(true);
      setShowError(false);
      setTimeout(() => {
        if (currentIndex < questions.length - 1) {
          setCurrentIndex(currentIndex + 1);
          setInput('');
          setIsCorrect(false);
        } else {
          setShowPraise(true);
        }
      }, 1000);
    } else {
      setShowError(true);
      setInput('');
    }
  };

  const handlePraiseComplete = () => {
    completeDetector();
    navigate('/');
  };

  if (showPraise) {
    return (
      <div className="flex-1 flex flex-col pt-12 pb-6">
        <Praise onNext={handlePraiseComplete} />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col pt-12 pb-6">
      <div className="flex justify-between items-center mb-8 text-purple-400 text-sm font-medium">
        <span>Detector Mode</span>
        <span>Question {currentIndex + 1}/5</span>
      </div>

      <div className="flex-1 flex flex-col items-center space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center space-y-2 mt-8">
          <h3 className="text-2xl font-bold text-purple-800">Solve the puzzle</h3>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-purple-100 text-5xl font-bold text-gray-800 text-center tracking-widest">
          {currentQuestion.text} = ?
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-8">
          <input
            ref={inputRef}
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full text-center text-4xl font-bold p-4 bg-white border-2 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-500 transition-colors"
            placeholder="Type answer"
            autoComplete="off"
          />

          {showError && !isCorrect && (
            <div className="text-center space-y-2 animate-in fade-in">
              <p className="text-lg text-red-500 font-bold">Not quite, try again!</p>
            </div>
          )}

          {isCorrect && (
            <div className="text-center text-2xl font-bold text-green-500 animate-bounce">
              Correct!
            </div>
          )}

          <button
            type="submit"
            disabled={!input || isCorrect}
            className="w-full py-4 bg-purple-600 text-white rounded-2xl text-lg font-medium hover:bg-purple-700 transition-transform active:scale-95 shadow-sm disabled:opacity-50 disabled:active:scale-100"
          >
            Check
          </button>
        </form>
      </div>
    </div>
  );
};
