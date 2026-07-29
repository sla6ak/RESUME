import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

const App = () => {
  return (
    <LanguageProvider>
    <div className="min-h-screen bg-stone-50 dark:bg-slate-900">
      <Header />
      <main className="pt-[73px]">
        <Hero />
        <Skills />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
    </LanguageProvider>
  );
};

export default App;
