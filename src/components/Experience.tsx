import { motion } from 'motion/react';
import { Rocket, Globe, MapPin, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { ExperienceItem } from '../types';

const EXPERIENCES: ExperienceItem[] = [
  {
    icon: Rocket,
    title: 'Co-fondatore & Technical Lead',
    company: 'Startup Cronometraggi Sportivi',
    period: '2024 - Presente',
    location: 'Abruzzo, Marche, Puglia',
    description:
      'Gestione completa di servizi di cronometraggio elettronico per eventi sportivi con tecnologia Race Result.',
    achievements: [
      'Gestione tecnica di oltre 20+ eventi sportivi',
      'Implementazione di sistemi di cronometraggio real-time',
      'Supporto on-site con risoluzione problemi immediata',
      'Espansione servizio in 3 regioni italiane',
    ],
  },
  {
    icon: Globe,
    title: 'Progetto PCTO Internazionale',
    company: 'Abu Dhabi, UAE',
    period: 'Esperienza Formativa',
    location: 'Emirati Arabi Uniti',
    description:
      'Esperienza professionale internazionale in ambiente multiculturale con focus su tecnologie IT.',
    achievements: [
      'Collaborazione in contesto internazionale',
      'Sviluppo competenze interculturali',
      'Applicazione pratica di conoscenze IT',
      'Networking professionale globale',
    ],
  },
];

export function Experience() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="experience" ref={ref} className="py-32 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16">
            <p className="text-blue-600 mb-4 tracking-widest text-sm font-medium">ESPERIENZA</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Dove ho applicato <span className="text-blue-600">le mie competenze</span>
            </h2>
          </div>

          <div className="space-y-8">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="group bg-white rounded-3xl p-8 md:p-10 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <exp.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-xl text-blue-600 font-medium mb-2">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-start lg:items-end gap-2 mt-2 lg:mt-0">
                        <div className="flex items-center gap-2 text-slate-500">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-6 leading-relaxed">{exp.description}</p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement) => (
                        <div key={achievement} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                          <span className="text-slate-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
