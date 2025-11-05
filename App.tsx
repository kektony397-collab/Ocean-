
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Section } from './components/Section';
import { Card } from './components/Card';
import { content } from './constants/content';
import type { Language, SectionData, CardData } from './types';
import { ConceptIcon, RevenueIcon, LaunchIcon, AppIcon, InvestmentIcon, FundingIcon } from './constants/icons';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');

  const currentContent = content[language];
  const sectionIcons: { [key: string]: React.ReactNode } = {
    concept: <ConceptIcon />,
    revenue: <RevenueIcon />,
    launchPlan: <LaunchIcon />,
    appStructure: <AppIcon />,
    investment: <InvestmentIcon />,
    funding: <FundingIcon />,
  };

  const renderSection = (sectionKey: keyof typeof currentContent['sections']) => {
    const section: SectionData = currentContent.sections[sectionKey];
    return (
      <Section title={section.title} icon={sectionIcons[sectionKey]}>
        <div className={`grid gap-6 ${sectionKey === 'launchPlan' ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {section.items.map((item: CardData | { phase: string; points: CardData[] }, index: number) => {
            if ('phase' in item) { // Handle nested structure for Launch Plan
              return (
                <div key={index} className="md:col-span-2 lg:col-span-3 bg-ocean-surface/50 p-6 rounded-2xl border border-slate-700">
                  <h3 className="text-2xl font-bold text-ocean-highlight mb-4">{item.phase}</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {item.points.map((point, pIndex) => (
                       <Card key={pIndex} title={point.title} description={point.description} />
                    ))}
                  </div>
                </div>
              );
            }
            return <Card key={index} title={item.title} description={item.description} />;
          })}
        </div>
      </Section>
    );
  };

  return (
    <div className="bg-ocean-deep text-slate-200 font-sans">
      <Header
        language={language}
        setLanguage={setLanguage}
        title={currentContent.header.title}
        tagline={currentContent.header.tagline}
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {renderSection('concept')}
        {renderSection('revenue')}
        {renderSection('launchPlan')}
        {renderSection('appStructure')}
        {renderSection('investment')}
        {renderSection('funding')}
        
        <Section title={currentContent.finalVision.title}>
           <div className="text-center">
             <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-ocean-highlight to-ocean-accent italic p-4">
              "{currentContent.finalVision.quote}"
             </p>
             <p className="mt-4 text-slate-400 text-lg">
                {currentContent.finalVision.subtitle}
             </p>
           </div>
        </Section>

      </main>
      <Footer creditText={currentContent.footer.credit} />
    </div>
  );
};

export default App;
