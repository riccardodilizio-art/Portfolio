import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const education = [
    {
      icon: GraduationCap,
      degree: 'Laurea Triennale in Informatica',
      institution: 'Università',
      status: 'In corso',
      period: '2021 - Presente',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      degree: 'Diploma di Perito Informatico',
      institution: 'Istituto Tecnico',
      status: '100/100',
      period: 'Completato',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="education" ref={ref} className="py-32 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <p className="text-blue-600 mb-4 tracking-wider">FORMAZIONE</p>
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">
              Il mio <span className="text-blue-600">percorso accademico</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white rounded-3xl p-8 hover:shadow-xl transition-all">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <edu.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl text-slate-900 mb-2">{edu.degree}</h3>
                      <p className="text-slate-600">{edu.institution}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full">
                      {edu.status}
                    </span>
                    <span className="text-slate-500">{edu.period}</span>
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
              La formazione accademica è solo l'inizio: credo nell'<strong>apprendimento continuo</strong> 
              attraverso progetti pratici, esperienze sul campo e costante aggiornamento sulle nuove tecnologie.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
