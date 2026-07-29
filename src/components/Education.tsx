import { useLanguage } from '../hooks/useLanguage';

export const Education = () => {
  const { t } = useLanguage();
  const education = t('education');

  return (
    <section id="education" className="py-20 bg-stone-50 dark:bg-slate-800">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 dark:text-slate-100">
          {education.title}
        </h2>

        <div className="space-y-6">
          {education.items.map(item => (
            <div
              key={item.title}
              className="flex gap-4 md:gap-6 bg-white dark:bg-slate-700 rounded-2xl p-6 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-shadow"
            >
              <div className="hidden md:flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-accent-primary ring-4 ring-accent-light/40" />
                <div className="w-0.5 flex-1 bg-accent-light/60 dark:bg-slate-500 mt-2" />
              </div>

              <div className="flex-1">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent-light/30 dark:bg-slate-600 text-accent-primary mb-2">
                  {item.date}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {item.title}
                </h3>
                <p className="text-sm text-accent-primary font-medium mb-2">{item.company}</p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
                {item.links && item.links.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.links.map(link => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-accent-light/30 dark:bg-slate-600 text-accent-primary hover:bg-accent-light/50 dark:hover:bg-slate-500 transition-all border border-accent-primary/20 dark:border-accent-primary/30"
                      >
                        {link.label}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
