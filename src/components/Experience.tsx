import { motion } from 'motion/react';
import { Rocket, Globe, MapPin, Calendar, Camera } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { ExperienceItem } from '../types';

interface ExperienceWithPhoto extends ExperienceItem {
  photo?: string;
  photoAlt?: string;
}

const EXPERIENCES: ExperienceWithPhoto[] = [
  {
    icon: Rocket,
    title: 'Co-fondatore & Technical Lead',
    company: 'Startup Cronometraggi Sportivi',
    period: '2023 - Presente',
    location: 'Abruzzo, Marche, Puglia',
    description:
      'Gestione completa di servizi di cronometraggio elettronico per eventi sportivi con tecnologia Race Result.',
    achievements: [
      'Gestione tecnica di oltre 100 eventi sportivi annuali',
      'Gestione gare con sistemi di cronometraggio real-time',
      'Supporto on-site con risoluzione problemi immediata',
      'Espansione servizio in 3 regioni italiane',
    ],
    /*
      PLACEHOLDER: Sostituisci con una tua foto ad un evento.
      Metti il file in: public/images/event-1.jpg
    */
    photo: '/images/event-1.jpg',
    photoAlt: 'Evento di cronometraggio sportivo',
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
    /*
      PLACEHOLDER: Sostituisci con una tua foto ad Abu Dhabi.
      Metti il file in: public/images/abudhabi.jpg
    */
    photo: '/images/abudhabi.jpg',
    photoAlt: 'Esperienza PCTO Abu Dhabi',
  },
];

export function Experience() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="experience" ref={ref} className="py-32 px-6 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16">
            <p className="text-blue-600 mb-4 tracking-[0.2em] text-xs font-semibold uppercase">
              Esperienza
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-[1.1]">
              Dove ho applicato{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                le mie competenze
              </span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-cyan-500/30 to-transparent hidden md:block" />

            <div className="space-y-8">
              {EXPERIENCES.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className="group gradient-border rounded-3xl"
                >
                  <div className="relative bg-white rounded-3xl p-8 md:p-10 border border-slate-100 hover:border-transparent hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
                    <div className="flex flex-col gap-8">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-blue-500/20">
                            <exp.icon className="w-8 h-8 text-white" />
                          </div>
                        </div>

                        <div className="flex-grow">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                            <div>
                              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                                {exp.title}
                              </h3>
                              <p className="text-xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-semibold mb-2">
                                {exp.company}
                              </p>
                            </div>
                            <div className="flex flex-col items-start lg:items-end gap-2 mt-2 lg:mt-0">
                              <div className="flex items-center gap-2 text-slate-400">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm font-medium">{exp.period}</span>
                              </div>
                              <div className="flex items-center gap-2 text-slate-400">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm font-medium">{exp.location}</span>
                              </div>
                            </div>
                          </div>

                          <p className="text-slate-600 mb-6 leading-relaxed">{exp.description}</p>

                          <div className="grid sm:grid-cols-2 gap-3">
                            {exp.achievements.map((achievement) => (
                              <div key={achievement} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mt-2.5 flex-shrink-0" />
                                <span className="text-slate-600 text-sm">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Photo */}
                      {exp.photo && (
                        <div className="relative rounded-2xl overflow-hidden aspect-[21/9]">
                          <ImageWithFallback
                            src={exp.photo}
                            alt={exp.photoAlt ?? ''}
                            className="w-full h-full object-cover"
                          />
                          {/* Placeholder */}
                            {/*<div className="absolute inset-0 photo-placeholder">
                            <div className="flex flex-col items-center gap-2">
                              <Camera className="w-10 h-10" />
                              <span>{exp.photo.split('/').pop()}</span>
                            </div>
                          </div>*/}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
