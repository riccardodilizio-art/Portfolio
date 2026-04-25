import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';
import type { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'About', id: 'about' },
  { label: 'Esperienza', id: 'experience' },
  { label: 'Competenze', id: 'skills' },
  { label: 'Formazione', id: 'education' },
  { label: 'Progetti', id: 'projects' },
  { label: 'Contatti', id: 'contact' },
];

const RISTORANTI_HREF = '/ristoranti';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-lg shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => handleNavClick('hero')}
              className={`text-xl font-semibold tracking-tight transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              Riccardo Di Lizio
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                    isScrolled ? 'text-slate-600' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={RISTORANTI_HREF}
                className={`inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all ${
                  isScrolled
                    ? 'bg-slate-900 text-white hover:bg-orange-700'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}
              >
                <UtensilsCrossed className="w-4 h-4" />
                Siti per ristoranti
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-slate-900 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={isMobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm pt-20 px-6"
          >
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left text-xl text-slate-900 py-3 px-4 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.a
                href={RISTORANTI_HREF}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.05 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center gap-3 text-xl font-semibold text-white bg-slate-900 py-3 px-4 rounded-xl hover:bg-orange-700 transition-colors"
              >
                <UtensilsCrossed className="w-5 h-5" />
                Siti per ristoranti
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
