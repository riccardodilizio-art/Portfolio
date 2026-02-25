import { motion } from 'motion/react';
import { Code, Database, Cpu, Lightbulb, Activity, Wrench } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { staggerDelay } from '../utils/animations';
import type { SkillCategory } from '../types';

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    icon: Code,
    title: 'Programmazione',
    skills: ['Sviluppo software', 'Algoritmi', 'Testing', 'Version control'],
  },
  {
    icon: Database,
    title: 'Sistemi',
    skills: ['Architetture IT', 'Networking', 'Database', 'Cloud'],
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    skills: ['Analisi', 'Pensiero logico', 'Debugging', 'Ottimizzazione'],
  },
  {
    icon: Activity,
    title: 'Sport Tech',
    skills: ['Race Result', 'Cronometraggio', 'Real-time', 'Event Tech'],
  },
  {
    icon: Wrench,
    title: 'Supporto Tecnico',
    skills: ['On-site', 'Troubleshooting', 'Live Events', 'Training'],
  },
  {
    icon: Cpu,
    title: 'IT Generale',
    skills: ['Hardware', 'Software', 'Security', 'DevOps'],
  },
];

export function Skills() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="skills" ref={ref} className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <p className="text-blue-600 mb-4 tracking-widest text-sm font-medium">COMPETENZE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Skills <span className="text-blue-600">tecniche e trasversali</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Un mix equilibrato di competenze teoriche e pratiche, acquisite attraverso
              formazione accademica ed esperienza sul campo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: staggerDelay(index) }}
                className="group"
              >
                <div className="h-full p-8 bg-slate-50 hover:bg-white rounded-2xl transition-all duration-300 hover:shadow-lg">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <category.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{category.title}</h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-white group-hover:bg-blue-50 text-slate-600 rounded-full text-sm font-medium transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
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
