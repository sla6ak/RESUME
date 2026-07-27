const timelineItems = [
  {
    date: '2022',
    title: 'Frontend Developer',
    company: 'Web Studio / IT Services',
    description:
      'Engineered web applications manually without AI tools, demonstrating a strong foundation in modern JavaScript. Developed Norwegian-language localized interfaces and built dynamic Next.js components with full CRUD functionality.',
  },
  {
    date: '2021 – 2022',
    title: 'Full-Stack Web Development Program',
    company: 'GoIT Company',
    description:
      'Intensive hands-on training focused on modern JavaScript, React, Node.js, and web application architecture. Built multiple individual and team projects from scratch, following agile methodologies and best engineering practices.',
  },
  {
    date: '2021 – Present',
    title: 'Full-Stack Developer (Personal & Open-Source Projects)',
    company: 'Self-Employed / Independent Practice',
    description:
      'Designing and building end-to-end web applications. Evolved from traditional hands-on coding to AI-assisted workflows, integrating local LLMs, MCP servers, and modern JS stack (React, Next.js, Node.js) to boost development speed and code quality.',
  },
  {
    date: 'Ongoing',
    title: 'Continuous Self-Education',
    company: 'Tech Stack & Language Proficiency',
    description:
      'Expanding expertise in modern full-stack ecosystem, Docker, WebSockets, and local AI tooling while systematically improving English skills.',
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-stone-50 dark:bg-slate-800">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 dark:text-slate-100">
          Education &amp; Training
        </h2>

        <div className="space-y-6">
          {timelineItems.map(item => (
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
