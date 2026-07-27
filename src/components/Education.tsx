const timelineItems = [
  {
    date: 'One year',
    title: 'Full-Stack Developer',
    company: 'GoIT Company',
    description: 'Completed intensive full-stack development program. Developed multiple projects using modern web technologies.',
  },
  {
    date: 'Ongoing',
    title: 'Self-Education',
    company: 'IT & English Language',
    description: 'Continuous learning in IT technologies and improving English language skills.',
  },
  {
    date: '10+ years',
    title: 'Electrician',
    company: 'Various Companies',
    description: 'Developed strong analytical and problem-solving skills while working in electrical engineering.',
  },
]

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-stone-50 dark:bg-slate-800">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 dark:text-slate-100">
          Education &amp; Experience
        </h2>

        <div className="space-y-6">
          {timelineItems.map((item) => (
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
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{item.title}</h3>
                <p className="text-sm text-accent-primary font-medium mb-2">{item.company}</p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
