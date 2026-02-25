import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { staggerDelay } from '../utils/animations';
import type { ContactMethod } from '../types';

const CONTACT_METHODS: ContactMethod[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'dlz.riccardo@gmail.com',
    href: 'mailto:dlz.riccardo@gmail.com',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/riccardo-dilizio',
    href: 'www.linkedin.com/in/riccardodilizio',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '/riccardodilizio',
    href: 'https://github.com/nickrickf1',
    gradient: 'from-slate-600 to-slate-800',
  },
];

export function Contact() {
  const { ref, isInView } = useScrollAnimation();
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" ref={ref} className="py-32 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <p className="text-blue-600 mb-4 tracking-[0.2em] text-xs font-semibold uppercase">
              Contatti
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-[1.1]">
              Parliamo del{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                prossimo progetto
              </span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Sono sempre aperto a nuove opportunità, collaborazioni e sfide interessanti.
              Non esitare a contattarmi!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {CONTACT_METHODS.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('mailto') ? undefined : '_blank'}
                rel={method.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: staggerDelay(index) }}
                className="group gradient-border rounded-2xl"
              >
                <div className="h-full bg-white rounded-2xl p-8 border border-slate-100 hover:border-transparent hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-blue-500/15`}
                    >
                      <method.icon className="w-7 h-7 text-white" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">{method.label}</h3>
                  <p className="text-blue-600 break-all text-sm">{method.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-10 md:p-16 text-center overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-2xl glass-dark flex items-center justify-center mx-auto mb-8">
                <Send className="w-10 h-10 text-blue-400" />
              </div>

              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Hai un progetto in mente?
              </h3>

              <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Che tu stia cercando un collaboratore, un tirocinante motivato
                o semplicemente voglia fare una chiacchierata sulla tecnologia,
                sono sempre disponibile.
              </p>

              <a
                href="mailto:dlz.riccardo@gmail.com"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Invia un messaggio
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 pt-8 border-t border-slate-100 text-center"
          >
            <p className="text-slate-400 mb-2 text-sm">
              &copy; {currentYear} Riccardo Di Lizio
            </p>
            <p className="text-xs text-slate-400/70">
              Computer Science Student · Sport Technology Enthusiast · Problem Solver
            </p>
          </motion.footer>
        </motion.div>
      </div>
    </section>
  );
}
