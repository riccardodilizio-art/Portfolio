import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Values } from './components/Values';
import { Contact } from './components/Contact';
import { Ristoranti } from './components/Ristoranti';

function isRistorantiPath(pathname: string): boolean {
  return pathname === '/ristoranti' || pathname === '/ristoranti/';
}

export default function App() {
  const [pathname, setPathname] = useState(() =>
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (isRistorantiPath(pathname)) {
    return <Ristoranti />;
  }

  return (
    <div className="min-h-screen grain">
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
          <Ristoranti/>
      </main>
    </div>
  );
}
