const projects = [
  {
    title: 'IceCream',
    description: 'Collaborative ice cream shop website with modern UI/UX.',
    url: 'https://sla6ak.github.io/IceCream-Project-Team1/',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    src: '/public/001.png',
    tags: ['Adaptive Design', 'Parcel', 'Git'],
  },
  {
    title: 'Filmoteka',
    description: 'Movie streaming platform with API integration and modern features.',
    url: 'https://sla6ak.github.io/team-project-js-filmoteka/',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    src: '/public/002.png',
    tags: ['JavaScript', 'API', 'Git'],
  },
  {
    title: 'My GitHub',
    description: 'Collection of open-source projects and contributions.',
    url: 'https://github.com/sla6ak',
    gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    src: '/public/003.png',
    tags: ['GitHub', 'Open Source'],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 dark:text-slate-100">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map(project => (
            <article
              key={project.title}
              className="bg-stone-50 dark:bg-slate-700 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-600 hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-video rounded-t-2xl overflow-hidden"
                style={{ background: project.gradient }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </a>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-accent-light/30 dark:bg-slate-600 text-accent-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <a
          href="https://github.com/sla6ak"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-hover font-semibold transition-colors"
        >
          View all projects →
        </a>
      </div>
    </section>
  );
};
