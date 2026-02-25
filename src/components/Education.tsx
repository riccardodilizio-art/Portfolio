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
    period: '2021 - Presente',
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
    <section id="education" ref={ref} className="py-32 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <p className="text-blue-600 mb-4 tracking-widest text-sm font-medium">FORMAZIONE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Il mio <span className="text-blue-600">percorso accademico</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="group"
              >
                <div className="h-full bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <edu.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                  <p className="text-slate-500 mb-4">{edu.institution}</p>

                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium">
                      {edu.status}
                    </span>
                    <span className="text-slate-400">{edu.period}</span>
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
            <p className="text-lg text-slate-600 leading-relaxed">
              La formazione accademica è solo l'inizio: credo nell'
              <strong className="text-slate-900">apprendimento continuo</strong> attraverso
              progetti pratici, esperienze sul campo e costante aggiornamento sulle nuove
              tecnologie.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
