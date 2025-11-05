
export type Language = 'en' | 'hi';

export interface CardData {
  title: string;
  description: string;
}

export interface LaunchPhase {
  phase: string;
  points: CardData[];
}

export interface SectionData {
  title: string;
  items: CardData[] | LaunchPhase[];
}

export interface ContentStructure {
  header: {
    title: string;
    tagline: string;
  };
  sections: {
    concept: SectionData;
    revenue: SectionData;
    launchPlan: SectionData;
    appStructure: SectionData;
    investment: SectionData;
    funding: SectionData;
  };
  finalVision: {
    title: string;
    quote: string;
    subtitle: string;
  };
  footer: {
    credit: string;
  };
}
