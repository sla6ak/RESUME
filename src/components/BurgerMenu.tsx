export const BurgerMenu = ({
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
  return (
    <nav className={`lg:hidden fixed top-[73px] right-0 w-full max-w-[280px] h-[calc(100vh-73px)] bg-white dark:bg-slate-800 shadow-4xl z-[1001] transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-[100%]'}`}>
      <ul className="flex flex-col p-6 gap-3">
        <li>
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); onClose(); setTimeout(() => window.location.hash = '#about', 50); }}
            className="block px-4 py-3 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-accent-primary font-medium transition-all"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={(e) => { e.preventDefault(); onClose(); setTimeout(() => window.location.hash = '#skills', 50); }}
            className="block px-4 py-3 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-accent-primary font-medium transition-all"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); onClose(); setTimeout(() => window.location.hash = '#projects', 50); }}
            className="block px-4 py-3 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-accent-primary font-medium transition-all"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#education"
            onClick={(e) => { e.preventDefault(); onClose(); setTimeout(() => window.location.hash = '#education', 50); }}
            className="block px-4 py-3 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-accent-primary font-medium transition-all"
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#contacts"
            onClick={(e) => { e.preventDefault(); onClose(); setTimeout(() => window.location.hash = '#contacts', 50); }}
            className="block px-4 py-3 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-accent-primary font-medium transition-all"
          >
            Contacts
          </a>
        </li>
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
            Theme
          </button>
        </li>
        <li>
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-accent-primary transition-all border-none bg-transparent">
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
            Language
          </button>
        </li>
      </ul>
    </nav>
  );
};
