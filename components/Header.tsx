
import React from 'react';
import type { Language } from '../types';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  title: string;
  tagline: string;
}

export const Header: React.FC<HeaderProps> = ({ language, setLanguage, title, tagline }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ocean-deep/80 backdrop-blur-lg border-b border-ocean-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
             <span className="text-3xl">🌊</span>
             <div>
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-ocean-highlight to-ocean-accent">
                    {title}
                </h1>
                <p className="text-xs text-slate-400 hidden sm:block">{tagline}</p>
             </div>
          </div>
          <div className="flex items-center bg-ocean-surface p-1 rounded-full">
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-colors duration-300 ${
                language === 'en' ? 'bg-ocean-accent text-white' : 'text-slate-300 hover:bg-slate-700'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('hi')}
              className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-colors duration-300 ${
                language === 'hi' ? 'bg-ocean-accent text-white' : 'text-slate-300 hover:bg-slate-700'
              }`}
            >
              HI
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
