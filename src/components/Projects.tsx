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
    <section id="projects" ref={ref} className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16">
            <p className="text-blue-600 mb-4 tracking-widest text-sm font-medium">PROGETTI</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Dove <span className="text-blue-600">l'innovazione prende vita</span>
            </h2>
          </div>

          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group mb-12"
          >
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1691675996849-78a298efe96a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwcnVubmluZyUyMHRyYWNrfGVufDF8fHx8MTc2Njg1NjE2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Startup Cronometraggi Sportivi"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-6 w-fit">
                    Featured Project
                  </span>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Startup Cronometraggi Sportivi
                  </h3>

                  <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                    Sistema completo di cronometraggio elettronico per eventi sportivi.
                    Servizio professionale itinerante che garantisce precisione e affidabilità
                    in ogni competizione.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {PROJECT_STATS.map((stat) => (
                      <div key={stat.label} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                          <stat.icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-white font-medium">{stat.label}</div>
                          <div className="text-sm text-slate-400">{stat.sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_TAGS.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-white/10 text-slate-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* More Projects Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-50 rounded-3xl p-12 text-center hover:shadow-lg transition-all duration-300"
          >
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <ExternalLink className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Altri Progetti in Arrivo
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Costantemente al lavoro su nuovi progetti personali e accademici.
                Questa sezione verrà aggiornata con le prossime realizzazioni.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
