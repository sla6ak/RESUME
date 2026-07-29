import { useLanguage } from '../hooks/useLanguage';

export const Skills = () => {
  const { t } = useLanguage();
  const skills = t('skills');

  const techCategories = [
    { key: 'frontend' as const, label: 'Frontend' },
    { key: 'backendAndInfrastructure' as const, label: skills.backendAndInfrastructure },
    { key: 'localAI' as const, label: skills.localAI },
  ];

  const techSkills = {
    localAI: [
      'Local LLM Runtime (Ollama, Llama.cpp)',
      'Model Quantization & Optimization (GGUF)',
      'AI Agents & Tooling Integration (MCP, APIs)',
    ],
    frontend: [
      'JavaScript (ES6+)',
      'React & Redux Toolkit',
      'Next.js (App Router, SSR/SSG)',
      'HTML5 / CSS3 / SCSS',
    ],
    backendAndInfrastructure: [
      'Node.js & Express',
      'WebSockets (Real-time communications)',
      'Telegram Bots API',
      'Docker & Containerization',
      'SSH Keys & Remote Server Management',
      'Git & Version Control',
    ],
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 dark:text-slate-100">
          {skills.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tech Stack */}
          <div className="bg-stone-50 dark:bg-slate-700 rounded-2xl p-6 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-shadow md:col-span-2">
            <span className="block text-sm font-semibold text-accent-primary mb-4">
              {skills.techStack}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {techCategories.map(({ key, label }) => (
                <div key={key}>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2 capitalize">
                    {label}
                  </h3>
                  <ul className="space-y-1.5">
                    {techSkills[key].map(skill => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-slate-700 dark:text-slate-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-primary flex-shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-stone-50 dark:bg-slate-700 rounded-2xl p-6 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-shadow">
            <span className="block text-sm font-semibold text-accent-primary mb-3">
              {skills.softSkills}
            </span>
            <ul className="space-y-2">
              {skills.softSkillsList.map(skill => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-slate-700 dark:text-slate-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="bg-stone-50 dark:bg-slate-700 rounded-2xl p-6 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-shadow">
            <span className="block text-sm font-semibold text-accent-primary mb-3">
              {skills.languages}
            </span>
            <ul className="space-y-2">
              {skills.languagesList.map(lang => (
                <li
                  key={lang}
                  className="flex items-center gap-2 text-slate-700 dark:text-slate-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary flex-shrink-0" />
                  {lang}
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div className="bg-stone-50 dark:bg-slate-700 rounded-2xl p-6 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-shadow">
            <span className="block text-sm font-semibold text-accent-primary mb-3">
              {skills.summary}
            </span>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              {skills.summaryText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
