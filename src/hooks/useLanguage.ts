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
    heroDescription:
      'Turning complex problems into elegant, user-centric solutions. Passionate about building scalable web applications with modern technologies.',
    skillsTitle: 'Skills & Experience',
    techStack: 'Tech Stack',
    softSkills: 'Soft Skills',
    languages: 'Languages',
    experience: 'Experience',
    experienceText:
      '10+ years transitioning from electrical engineering to IT. Strong analytical skills and dedication to continuous learning.',
    viewAllProjects: 'View all projects →',
    educationTitle: 'Education & Experience',
    footerNotice: 'Resume updated: 2026',
    cityLink: 'Krivoy Rog, Ukraine',
    currentYear: '2026',
  },
  ua: {
    about: 'Про мене',
    skills: 'Навички',
    projects: 'Проекти',
    education: 'Освіта',
    heroSubtitle: 'Full-Stack Developer',
    heroTitle: 'Віктор Ячменик',
    heroDescription:
      'Перетворюю складні проблеми на елегантні рішення. Створюю масштабовані веб-застосунки.',
    skillsTitle: 'Навички та досвід',
    techStack: 'Технічний стек',
    softSkills: "М'які навички",
    languages: 'Мови',
    experience: 'Досвід роботи',
    experienceText:
      'Близько 10 років переходу з електротехніки в IT. Аналітичний склад та відданість навчанню.',
    viewAllProjects: 'Переглянути всі проекти →',
    educationTitle: 'Освіта та досвід',
    footerNotice: 'Резюме оновлено: 2026',
    cityLink: 'Кривий Ріг, Україна',
    currentYear: '2026',
  },
  ru: {
    about: 'Обо мне',
    skills: 'Навыки',
    projects: 'Проекты',
    education: 'Образование',
    heroSubtitle: 'Full-Stack Developer',
    heroTitle: 'Виктор Ячменик',
    heroDescription:
      'Преобразую сложные проблемы в элегантные решения. Создаю масштабируемые веб-приложения.',
    skillsTitle: 'Навыки и опыт',
    techStack: 'Технологический стек',
    softSkills: 'Мягкие навыки',
    languages: 'Языки',
    experience: 'Опыт работы',
    experienceText:
      'Более 10 лет перехода с электротехники в IT. Аналитический склад и преданность обучению.',
    viewAllProjects: 'Смотреть все проекты →',
    educationTitle: 'Образование и опыт',
    footerNotice: 'Резюме обновлено: 2026',
    cityLink: 'Кривой Рог, Украина',
    currentYear: '2026',
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
