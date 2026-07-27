export const Skills = () => {
  const techSkills = {
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
    localAI: [
      'Local LLM Runtime (Ollama, Llama.cpp)',
      'Model Quantization & Optimization (GGUF)',
      'AI Agents & Tooling Integration (MCP, APIs)',
    ],
  };

  const softSkills = [
    'Continuous Self-Learning & Research', // Исследовательский подход и самообучение
    'Ownership & Problem Ownership', // Ответственность за результат и доведение задач до релиза
    'Adaptability to Emerging Tech & Workflows', // Быстрая адаптация под тренды (AI, новые фреймворки)
    'Asynchronous & Cross-Team Communication', // Грамотная асинхронная коммуникация
    'Integrity & Transparency', // Честность, открытость
    'Friendly & Approachable', // Дружелюбие, приветливость и открытость к людям
    'Healthy Lifestyle & Zero Bad Habits', // Здоровый образ жизни и отсутствие вредных привычек
  ];

  const languages = [
    'English — B2 (Reading & Technical Literature) / A2 (Spoken)',
    'Ukrainian — Native',
    'Russian — Native',
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 dark:text-slate-100">
          Skills & Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tech Stack */}
          <div className="bg-stone-50 dark:bg-slate-700 rounded-2xl p-6 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-shadow md:col-span-2">
            <span className="block text-sm font-semibold text-accent-primary mb-4">Tech Stack</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {Object.entries(techSkills).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2 capitalize">
                    {category === 'backendAndInfrastructure' ? 'Backend & Infrastructure' : category === 'localAI' ? 'AI & Local LLMs' : category}
                  </h3>
                  <ul className="space-y-1.5">
                    {skills.map(skill => (
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
              Soft Skills
            </span>
            <ul className="space-y-2">
              {softSkills.map(skill => (
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
            <span className="block text-sm font-semibold text-accent-primary mb-3">Languages</span>
            <ul className="space-y-2">
              {languages.map(lang => (
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
              Summary / Experience
            </span>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              GoIT Full-Stack Graduate with continuous coding experience since 2021. Skilled in
              building responsive frontend applications and Node.js backends. Strong problem-solving
              mindset, fast learner, and enthusiast of open-source LLMs and developer automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
