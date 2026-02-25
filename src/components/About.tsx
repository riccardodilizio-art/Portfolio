import { motion } from 'motion/react';
import { Code2, Trophy, Lightbulb, Target } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { staggerDelay } from '../utils/animations';
import type { Stat, FeatureCard } from '../types';

const STATS: Stat[] = [
  { number: '100', label: 'Voto Diploma', suffix: '/100' },
  { number: '3', label: 'Regioni Coperte', suffix: '+' },
  { number: '2024', label: 'Startup Fondata', suffix: '' },
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
    <section id="about" ref={ref} className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                  {stat.number}
                  <span className="text-blue-600">{stat.suffix}</span>
                </div>
                <div className="text-sm text-slate-500 font-medium tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-blue-600 mb-4 tracking-widest text-sm font-medium">CHI SONO</p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Passione per la tecnologia,{' '}
                <span className="text-blue-600">esperienza sul campo</span>
              </h2>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {FEATURES.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: staggerDelay(index, 0.5, 0.1) }}
                  className="group p-6 bg-slate-50 hover:bg-blue-50 rounded-2xl transition-all hover:shadow-md"
                >
                  <item.icon className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
