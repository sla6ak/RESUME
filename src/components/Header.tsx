import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { BurgerMenu } from './BurgerMenu';
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] bg-white/80 dark:bg-slate-900/85 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between gap-8">
        <a
          href="https://github.com/sla6ak"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-hover font-semibold transition-colors"
        >
          <img src="/svg/github.svg" alt="GitHub" className="w-7 h-7" />
          <span className="text-slate-800 dark:text-slate-100">Viktor</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          <a
            href="#about"
            className="px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-accent-primary font-medium transition-all"
          >
            About
          </a>
          <a
            href="#skills"
            className="px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-accent-primary font-medium transition-all"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-accent-primary font-medium transition-all"
          >
            Projects
          </a>
          <a
            href="#education"
            className="px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-accent-primary font-medium transition-all"
          >
            Education
          </a>
          <a
            href="#contacts"
            className="px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-accent-primary font-medium transition-all"
          >
            Contacts
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="hidden lg:flex w-11 h-11 rounded-full items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            aria-label="Toggle dark mode"
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
          </button>
        </div>

        <button
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 p-2 bg-transparent border-none cursor-pointer text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <rect x="3" y="6" width="18" height="1.5" rx="0.5" />
            <rect x="3" y="12" width="18" height="1.5" rx="0.5" />
            <rect x="3" y="18" width="18" height="1.5" rx="0.5" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-[999] lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          <BurgerMenu isDark={isDark} toggleTheme={toggleTheme} onClose={() => setIsOpen(false)} />
        </>
      )}
    </header>
  );
};
