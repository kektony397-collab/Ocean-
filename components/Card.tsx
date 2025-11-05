
import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-ocean-surface p-6 rounded-xl border border-slate-800 hover:border-ocean-accent hover:bg-slate-800/50 transition-all duration-300 h-full">
      <h3 className="text-lg font-bold text-ocean-highlight mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};
