export const Skills = () => {
  const techSkills = [
    'JavaScript (ES6+)',
    'React & Redux Toolkit',
    'HTML5 / CSS3 / SCSS',
    'Webpack & Parcel',
    'Node.js',
    'Git & Version Control',
  ]

  const softSkills = [
    'Problem-solving',
    'Communication',
    'Team collaboration',
    'Adaptability',
    'Critical thinking',
  ]

  const languages = [
    'English — B2 (Upper Intermediate)',
    'Russian — Native',
    'Ukrainian — Native',
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 dark:text-slate-100">
          Skills & Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tech Stack */}
          <div className="bg-stone-50 dark:bg-slate-700 rounded-2xl p-6 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-shadow">
            <span className="block text-sm font-semibold text-accent-primary mb-3">Tech Stack</span>
            <ul className="space-y-2">
              {techSkills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="bg-stone-50 dark:bg-slate-700 rounded-2xl p-6 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-shadow">
            <span className="block text-sm font-semibold text-accent-primary mb-3">Soft Skills</span>
            <ul className="space-y-2">
              {softSkills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
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
              {languages.map((lang) => (
                <li key={lang} className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary flex-shrink-0" />
                  {lang}
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div className="bg-stone-50 dark:bg-slate-700 rounded-2xl p-6 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-shadow">
            <span className="block text-sm font-semibold text-accent-primary mb-3">Experience</span>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              10+ years transitioning from electrical engineering to IT.
              Strong analytical skills and dedication to continuous learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
