import { motion } from 'motion/react';
import { Target, TrendingUp, Lightbulb, GraduationCap } from 'lucide-react';
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
    <section id="values" ref={ref} className="py-32 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <p className="text-blue-600 mb-4 tracking-widest text-sm font-medium">VALORI</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              I principi che <span className="text-blue-600">guidano il mio lavoro</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: staggerDelay(index) }}
                className="group"
              >
                <div className="h-full bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <value.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center max-w-4xl mx-auto"
          >
            <blockquote className="text-2xl md:text-3xl text-slate-900 italic leading-relaxed font-light">
              "La tecnologia è il mezzo, la passione è il motore,
              la crescita continua è l'obiettivo."
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
