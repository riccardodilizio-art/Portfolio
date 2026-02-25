import { motion } from 'motion/react';
import { Target, TrendingUp, Lightbulb, GraduationCap, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { staggerDelay } from '../utils/animations';
import type { ValueItem } from '../types';

const VALUES: ValueItem[] = [
  {
    icon: Target,
    title: 'Disciplina',
    description: 'Approccio metodico e rigoroso, eredità del background sportivo agonistico.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: 'Costanza',
    description: 'Impegno continuo nel perseguire obiettivi con determinazione.',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Lightbulb,
    title: 'Innovazione',
    description: 'Curiosità verso nuove tecnologie e soluzioni creative ed efficienti.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: GraduationCap,
    title: 'Formazione Continua',
    description: "Consapevolezza che l'apprendimento non ha fine.",
    gradient: 'from-cyan-500 to-teal-500',
  },
];

export function Values() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="values" ref={ref} className="py-32 px-6 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <p className="text-blue-600 mb-4 tracking-[0.2em] text-xs font-semibold uppercase">
              Valori
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-[1.1]">
              I principi che{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                guidano il mio lavoro
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: staggerDelay(index) }}
                className="group gradient-border rounded-3xl"
              >
                <div className="h-full bg-white rounded-3xl p-8 border border-slate-100 hover:border-transparent hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 relative overflow-hidden">
                  {/* Number indicator */}
                  <span className="absolute top-6 right-6 text-7xl font-black text-slate-100 group-hover:text-blue-50 transition-colors duration-300 select-none leading-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-blue-500/15`}
                    >
                      <value.icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 text-center max-w-4xl mx-auto relative"
          >
            <div className="relative p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
              {/* Decorative orbs */}
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/15 rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl" />

              <div className="relative z-10">
                <Quote className="w-10 h-10 text-blue-400/40 mx-auto mb-4" />
                <blockquote className="text-xl md:text-2xl text-white italic leading-relaxed font-light">
                  "La tecnologia è il mezzo, la passione è il motore,
                  la crescita continua è l'obiettivo."
                </blockquote>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
