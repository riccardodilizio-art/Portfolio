import { motion } from 'motion/react';
import { Code2, Trophy, Lightbulb, Target } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { staggerDelay } from '../utils/animations';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Stat, FeatureCard } from '../types';

const STATS: Stat[] = [
  { number: '100', label: 'Voto Diploma', suffix: '/100' },
  { number: '3', label: 'Regioni Coperte', suffix: '+' },
  { number: '2023', label: 'Startup Fondata', suffix: '' },
  { number: '\u221E', label: 'Voglia di Imparare', suffix: '' },
];

const FEATURES: FeatureCard[] = [
  { icon: Code2, title: 'Sviluppo', desc: 'Software & Sistemi' },
  { icon: Trophy, title: 'Sport Tech', desc: 'Cronometraggio' },
  { icon: Lightbulb, title: 'Problem Solving', desc: 'Approccio analitico' },
  { icon: Target, title: 'Obiettivi', desc: 'Orientato ai risultati' },
];

export function About() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="py-32 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="text-center p-6 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                    {stat.number}
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 font-medium tracking-widest uppercase">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Photo + Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-blue-600 mb-4 tracking-[0.2em] text-xs font-semibold uppercase">
                Chi Sono
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-[1.1]">
                Passione per la tecnologia,{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  esperienza sul campo
                </span>
              </h2>

              {/* Personal Photo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative mb-8 rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <ImageWithFallback
                  src="/images/about.jpg"
                  alt="Riccardo Di Lizio al lavoro"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/40 rounded-tl-lg" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/40 rounded-br-lg" />
              </motion.div>

              <div className="space-y-5 text-base md:text-lg text-slate-600 leading-relaxed">
                <p>
                  Sono uno studente di Informatica con un solido background tecnico,
                  avendo conseguito il diploma da Perito Informatico con votazione massima.
                </p>
                <p>
                  La mia formazione si unisce a esperienze concrete: co-fondatore di una
                  startup di cronometraggi sportivi che opera in Abruzzo, Marche e Puglia,
                  dove applico quotidianamente competenze IT in contesti reali.
                </p>
                <p>
                  Il background sportivo come atleta di atletica leggera agonistica mi ha
                  insegnato disciplina, costanza e determinazione — valori che porto in ogni progetto.
                </p>
              </div>
            </motion.div>

            {/* Right: Feature Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-5"
            >
              {FEATURES.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: staggerDelay(index, 0.5, 0.1) }}
                  className="group gradient-border rounded-2xl"
                >
                  <div className="relative p-6 bg-white rounded-2xl border border-slate-100 hover:border-transparent hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
