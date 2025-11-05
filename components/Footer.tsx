
import React from 'react';

interface FooterProps {
  creditText: string;
}

export const Footer: React.FC<FooterProps> = ({ creditText }) => {
  return (
    <footer className="border-t border-ocean-surface mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-slate-400">
        <p>&copy; {new Date().getFullYear()} The Blue Ocean. All Rights Reserved.</p>
        <p className="text-sm mt-2 font-semibold">{creditText}</p>
      </div>
    </footer>
  );
};
