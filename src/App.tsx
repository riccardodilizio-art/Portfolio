import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Values } from './components/Values';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen grain">
      {/* Skip link for accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white focus:text-slate-900 focus:shadow-lg"
      >
        Vai al contenuto
      </a>

      <Navbar />

      <header>
        <Hero />
      </header>

      <main>
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Values />
        <Contact />
      </main>
    </div>
  );
}
