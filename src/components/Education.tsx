import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { EducationItem } from '../types';

const EDUCATION: EducationItem[] = [
  {
    icon: GraduationCap,
    degree: 'Laurea Triennale in Informatica',
    institution: 'Universit\u00E0',
    status: 'In corso',
    period: '2023 - Presente',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Award,
    degree: 'Diploma di Perito Informatico',
    institution: 'Istituto Tecnico',
    status: '100/100',
    period: 'Completato',
    gradient: 'from-indigo-500 to-purple-500',
  },
];

export function Education() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="education" ref={ref} className="py-32 px-6 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <p className="text-blue-600 mb-4 tracking-[0.2em] text-xs font-semibold uppercase">
              Formazione
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-[1.1]">
              Il mio{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                percorso accademico
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="group gradient-border rounded-3xl"
              >
                <div className="h-full bg-white rounded-3xl p-8 border border-slate-100 hover:border-transparent hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
                  {/* Top row: icon + status badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-blue-500/15`}
                    >
                      <edu.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-full text-sm font-semibold">
                      {edu.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                  <p className="text-slate-500 mb-4">{edu.institution}</p>

                  <div className="flex items-center gap-2">
                    <div className="h-px flex-grow bg-slate-100" />
                    <span className="text-xs text-slate-400 font-medium">{edu.period}</span>
                    <div className="h-px flex-grow bg-slate-100" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <div className="p-8 rounded-2xl bg-white/60 border border-slate-100">
              <p className="text-lg text-slate-600 leading-relaxed">
                La formazione accademica è solo l'inizio: credo nell'
                <strong className="text-slate-900 font-semibold">apprendimento continuo</strong>{' '}
                attraverso progetti pratici, esperienze sul campo e costante aggiornamento
                sulle nuove tecnologie.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
