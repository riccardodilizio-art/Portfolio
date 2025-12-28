import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'riccardo.dilizio@example.com',
      href: 'mailto:riccardo.dilizio@example.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/riccardo-dilizio',
      href: 'https://linkedin.com/in/riccardo-dilizio',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '/riccardodilizio',
      href: 'https://github.com/riccardodilizio',
      color: 'from-slate-600 to-slate-800'
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <p className="text-blue-600 mb-4 tracking-wider">CONTATTI</p>
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">
              Parliamo del <span className="text-blue-600">prossimo progetto</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Sono sempre aperto a nuove opportunità, collaborazioni e sfide interessanti. 
              Non esitare a contattarmi!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-slate-50 hover:bg-white rounded-2xl p-8 hover:shadow-xl transition-all">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <method.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-lg text-slate-900 mb-2">{method.label}</h3>
                  <p className="text-blue-600 break-all">{method.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 text-center"
          >
            <Send className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            
            <h3 className="text-3xl md:text-4xl text-white mb-6">
              Hai un progetto in mente?
            </h3>
            
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Che tu stia cercando un collaboratore, un tirocinante motivato 
              o semplicemente voglia fare una chiacchierata sulla tecnologia, 
              sono sempre disponibile.
            </p>

            <a
              href="mailto:riccardo.dilizio@example.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full hover:bg-blue-50 transition-all"
            >
              <Mail className="w-5 h-5" />
              Invia un messaggio
            </a>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-slate-200 text-center"
          >
            <p className="text-slate-600 mb-2">
              © 2025 Riccardo Di Lizio
            </p>
            <p className="text-sm text-slate-500">
              Computer Science Student · Sport Technology Enthusiast · Problem Solver
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
