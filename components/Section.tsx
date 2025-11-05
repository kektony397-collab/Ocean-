
import React from 'react';

interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, icon, children }) => {
  return (
    <section className="py-12 sm:py-16">
      <div className="flex items-center gap-4 mb-8">
        {icon}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
};
