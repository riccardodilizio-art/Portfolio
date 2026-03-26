import { motion } from 'motion/react';
import { Timer, MapPin, Users, Zap, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PROJECT_STATS = [
  { icon: Timer, label: 'Real-time', sub: 'Cronometraggio' },
  { icon: MapPin, label: '3 Regioni', sub: 'Coverage' },
  { icon: Users, label: 'Eventi', sub: 'Multi-size' },
  { icon: Zap, label: 'On-site', sub: 'Support' },
] as const;

const PROJECT_TAGS = ['Race Result', 'Event Tech', 'Real-time Systems', 'On-site'] as const;

export function Projects() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="projects" ref={ref} className="py-32 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16">
            <p className="text-blue-600 mb-4 tracking-[0.2em] text-xs font-semibold uppercase">
              Progetti
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-[1.1]">
              Dove{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                l'innovazione prende vita
              </span>
            </h2>
          </div>

          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group mb-12"
          >
            <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl overflow-hidden">
              {/* Decorative orbs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />

              <div className="relative grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-72 md:h-auto overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1691675996849-78a298efe96a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwcnVubmluZyUyMHRyYWNrfGVufDF8fHx8MTc2Njg1NjE2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Startup Cronometraggi Sportivi"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 w-fit border border-blue-500/20">
                    Featured Project
                  </span>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Startup Cronometraggi Sportivi
                  </h3>

                  <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                    Servizio completo e professionale di cronometraggi di eventi sportivi.
                    Servizio professionale itinerante che garantisce precisione e affidabilità
                    in ogni competizione.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {PROJECT_STATS.map((stat) => (
                      <div key={stat.label} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg glass-dark flex items-center justify-center">
                          <stat.icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">{stat.label}</div>
                          <div className="text-xs text-slate-400">{stat.sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_TAGS.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 glass-dark text-slate-300 rounded-lg text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Photo Gallery Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
          >
            {['event-2.jpg', 'event-1.jpg', 'abudhabi.jpg'].map((filename, i) => (
              <div
                key={filename}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] group"
              >
                <ImageWithFallback
                  src={`/images/${filename}`}
                  alt={`Foto ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </motion.div>

          {/* More Projects Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="gradient-border rounded-3xl"
          >
            <div className="bg-slate-50/80 rounded-3xl p-12 text-center border border-slate-100 hover:border-transparent transition-all duration-300">
              <div className="max-w-2xl mx-auto">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mx-auto mb-6">
                  <ExternalLink className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Altri Progetti in Arrivo
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  Costantemente al lavoro su nuovi progetti personali e accademici.
                  Questa sezione verrà aggiornata con le prossime realizzazioni.
                </p>
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
