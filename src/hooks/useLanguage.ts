import { useState, useEffect, useCallback } from 'react';

export type Language = 'en' | 'ua' | 'ru';

const translations: Record<Language, Record<string, string>> = {
  en: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    education: 'Education',
    heroSubtitle: 'Full-Stack Developer',
    heroTitle: 'Viktor Yachmenik',
  },
  ua: {
    about: 'Про мене',
    skills: 'Навички',
    projects: 'Проекти',
    education: 'Освіта',
    heroSubtitle: 'Full-Stack Developer',
    heroTitle: 'Віктор Ячменик',
    heroDescription: '',
    skillsTitle: 'Навички та досвід',
    techStack: 'Технічний стек',
    softSkills: "М'які навички",
    languages: 'Мови',
  },
  ru: {
    about: 'Обо мне',
    skills: 'Навыки',
    projects: 'Проекты',
    education: 'Образование',
    heroSubtitle: 'Full-Stack Developer',
    heroTitle: 'Виктор Ячменик',
    s: 'Смотреть все проекты →',
  },
};

export function useLanguage() {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    const stored = localStorage.getItem('languageResume');
    if (stored && translations[stored as Language]) {
      setLang(stored as Language);
    }
  }, []);

  const setLanguage = useCallback((l: Language) => {
    setLang(l);
    localStorage.setItem('languageResume', JSON.stringify(l));
  }, []);

  const t = translations[lang];

  return { lang, setLanguage, t };
}
