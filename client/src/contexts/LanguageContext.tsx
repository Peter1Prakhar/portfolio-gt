import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'de';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Simple translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    home: 'HOME',
    about: 'ABOUT',
    projects: 'PROJECTS',
    education: 'EDUCATION',
    testimonials: 'TESTIMONIALS',
    partners: 'PARTNERS',
    blog: 'BLOG',
    contact: 'CONTACT',
    getInTouch: 'Get in Touch',
    viewMyWork: 'View My Work',
    readMore: 'Read More',
    mySkills: 'My Skills',
    aboutMe: 'About Me',
    yearsInGamingIndustry: 'Years in Gaming Industry',
    gamingProjects: 'Gaming Projects', 
    downloadResume: 'Download Resume'
  },
  fr: {
    home: 'ACCUEIL',
    about: 'À PROPOS',
    projects: 'PROJETS',
    education: 'ÉDUCATION',
    testimonials: 'TÉMOIGNAGES',
    partners: 'PARTENAIRES',
    blog: 'BLOG',
    contact: 'CONTACT',
    getInTouch: 'Me Contacter',
    viewMyWork: 'Voir Mon Travail',
    readMore: 'Lire Plus',
    mySkills: 'Mes Compétences',
    aboutMe: 'À Propos de Moi',
    yearsInGamingIndustry: 'Ans dans l\'Industrie du Jeu',
    gamingProjects: 'Projets de Jeux',
    downloadResume: 'Télécharger CV'
  },
  de: {
    home: 'STARTSEITE',
    about: 'ÜBER MICH',
    projects: 'PROJEKTE',
    education: 'BILDUNG',
    testimonials: 'REFERENZEN',
    partners: 'PARTNER',
    blog: 'BLOG',
    contact: 'KONTAKT',
    getInTouch: 'Kontakt Aufnehmen',
    viewMyWork: 'Meine Arbeit Ansehen',
    readMore: 'Mehr Lesen',
    mySkills: 'Meine Fähigkeiten',
    aboutMe: 'Über Mich',
    yearsInGamingIndustry: 'Jahre in der Spielebranche',
    gamingProjects: 'Spieleprojekte',
    downloadResume: 'Lebenslauf Herunterladen'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}