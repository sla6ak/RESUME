import { useLanguage } from '../hooks/useLanguage';
import project1Img from '../assets/images/001.png';
import project2Img from '../assets/images/002.png';
import project3Img from '../assets/images/003.png';

const projectData = [
  {
    url: 'https://sla6ak.github.io/IceCream-Project-Team1/',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    src: project1Img,
  },
  {
    url: 'https://sla6ak.github.io/team-project-js-filmoteka/',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    src: project2Img,
  },
  {
    url: 'https://github.com/sla6ak',
    gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    src: project3Img,
  },
];

export const Projects = () => {
  const { t } = useLanguage();
  const projects = t('projects');

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 dark:text-slate-100">
          {projects.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.items.map((item, index) => (
            <article
              key={item.title}
              className="bg-stone-50 dark:bg-slate-700 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-600 hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <a
                href={projectData[index].url}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-video rounded-t-2xl overflow-hidden"
                style={{ background: projectData[index].gradient }}
              >
                <img
                  src={projectData[index].src}
                  alt={item.title}
                  className="w-full h-full object-cover blur-[2px] group-hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
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
          {projects.viewAll}
        </a>
      </div>
    </section>
  );
};
