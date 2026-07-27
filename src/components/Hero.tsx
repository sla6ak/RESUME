export const Hero = () => {
  return (
    <section id="about" className="flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-[-50%] right-[-15%] w-[90%] h-[300px] bg-accent-light/60 dark:bg-accent-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-10 flex flex-col-reverse sm:flex-row items-center sm:justify-center gap-6 sm:gap-8 w-full">
        <div className="flex-shrink-0 w-[clamp(120px,40vw,340px)] h-[clamp(120px,40vw,340px)] sm:w-[clamp(150px,30vw,340px)] sm:h-[clamp(150px,30vw,340px)]">
          <img
            src="/viktor.png"
            alt="Viktor Yachmenyk"
            className="w-full h-full object-cover rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
          />
        </div>
        <div className="text-left max-w-[600px] animate-fadeInUp px-2 sm:px-0">
          <p className="text-accent-primary font-semibold text-xs sm:text-sm uppercase tracking-[0.1em] mb-3 sm:mb-4">
            Full-Stack Engineer
          </p>
          <h1 className="text-[clamp(1.75rem,5vw,3.5rem)] font-extrabold leading-[1.1] text-slate-900 dark:text-slate-100 mb-3 sm:mb-4">
            Viktor Yachmenyk
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-[clamp(1rem,2vw,1.125rem)] leading-relaxed max-w-[600px]">
            Scalable Web Systems • High Performance & Clean Code • Local AI & LLM Workflows
            Integration.
          </p>
        </div>
      </div>
    </section>
  );
};
