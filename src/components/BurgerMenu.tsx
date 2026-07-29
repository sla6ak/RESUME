import { useLanguage, Language } from '../hooks/useLanguage';

const BurgerMenu = ({
  isDark,
  toggleTheme,
  onClose,
  isOpen,
}: {
  isDark: boolean;
  toggleTheme: () => void;
  onClose: () => void;
  isOpen: boolean;
}) => {
  const { t, lang, setLanguage } = useLanguage();
  const header = t('header');
  const menu = t('burgerMenu');

  const navItems = [
    { href: '#about', label: header.about },
    { href: '#skills', label: header.skills },
    { href: '#projects', label: header.projects },
    { href: '#education', label: header.education },
    { href: '#contacts', label: header.contacts },
  ];

  const languages: Language[] = ['en', 'ua', 'ru'];
  const langLabels: Record<Language, string> = { en: 'EN', ua: 'UA', ru: 'RU' };

  return (
    <nav className={`lg:hidden fixed top-[73px] right-0 w-full max-w-[280px] h-[calc(100vh-73px)] bg-white dark:bg-slate-800 shadow-4xl z-[1001] transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-[100%]'}`}>
      <ul className="flex flex-col p-6 gap-3">
        {navItems.map(item => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={(e) => { e.preventDefault(); onClose(); setTimeout(() => window.location.hash = item.href, 50); }}
              className="block px-4 py-3 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-accent-primary font-medium transition-all"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <ul className="border-t border-slate-200 dark:border-slate-700 p-6 flex flex-col gap-3">
        <li>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-accent-primary transition-all border-none bg-transparent"
          >
            {isDark ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
            {menu.theme}
          </button>
        </li>
        <li>
          <button
            onClick={() => setLanguage(languages[(languages.indexOf(lang) + 1) % languages.length])}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-accent-primary transition-all border-none bg-transparent"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 12h18M3 12l2-2m-2 2l2 2M21 12h-6m6 0l-2-2m2 2l2 2M3 19h18M3 19l2-2m-2 2l2-2M3 5h18M3 5l2 2m-2-2l2 2" />
            </svg>
            {menu.language} ({langLabels[lang]})
          </button>
        </li>
      </ul>
    </nav>
  );
};

export { BurgerMenu };
