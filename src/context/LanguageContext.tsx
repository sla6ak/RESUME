import { createContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { Language, TranslationKeys, translations } from '../utils/translations';

export type { Language };

interface LanguageContextType {
  lang: Language;
  setLanguage: (l: Language) => void;
  t: <K extends keyof TranslationKeys>(key: K) => TranslationKeys[K];
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    const stored = localStorage.getItem('languageResume');
    if (stored && stored in translations) {
      setLang(stored as Language);
    }
  }, []);

  const setLanguage = useCallback((l: Language) => {
    setLang(l);
    localStorage.setItem('languageResume', l);
  }, []);

  const t = useCallback(
    <K extends keyof TranslationKeys>(key: K): TranslationKeys[K] => {
      return translations[lang][key];
    },
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
