import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, User } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';
import { ImageWithFallback } from './figma/ImageWithFallback';

const SOCIAL_LINKS = [
  { icon: Mail, href: 'mailto:riccardo.dilizio@example.com', label: 'Email' },
  { icon: Linkedin, href: 'https://linkedin.com/in/riccardo-dilizio', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/riccardodilizio', label: 'GitHub' },
] as const;

function ProfilePhoto() {
  return (
    <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto mb-8">
      {/* Glow ring */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 opacity-60 blur-md animate-[pulse-glow_3s_ease-in-out_infinite]" />
      {/* Spinning gradient border */}
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 animate-[gradient-shift_8s_ease_infinite]" style={{ backgroundSize: '200% 200%' }} />
      {/* Photo container */}
      <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-800">
        {/*
          PLACEHOLDER: Sostituisci con la tua foto profilo.
          Metti il file in: public/images/profile.jpg
        */}
        <ImageWithFallback
          src="/images/profile.jpg"
          alt="Riccardo Di Lizio"
          className="w-full h-full object-cover"
        />
        {/* Fallback icon - si vede solo se la foto non esiste */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <User className="w-16 h-16 text-slate-600 opacity-50" />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"
    >
      {/* Animated floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-[float_6s_ease-in-out_3s_infinite]" />
        <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-[float_6s_ease-in-out_1.5s_infinite]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.1),transparent_50%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          >
            <ProfilePhoto />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-blue-400/80 mb-6 tracking-[0.3em] text-xs font-medium uppercase"
          >
            Portfolio 2025
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-8xl text-white mb-6 tracking-tight font-bold"
          >
            Riccardo
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Di Lizio
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400/50" />
            <p className="text-xl md:text-2xl text-slate-300 font-light tracking-wide">
              Computer Science Student
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400/50" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Co-founder di una startup tecnologica, atleta agonista e appassionato di innovazione.
            Costruisco soluzioni che uniscono tecnologia e sport.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 bg-white text-slate-900 rounded-full font-medium hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 flex items-center gap-2"
            >
              Contattami
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 text-white rounded-full font-medium transition-all duration-300 glass-dark hover:bg-white/10"
            >
              Vedi i progetti
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center justify-center gap-3"
          >
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={link.label}
                className="w-12 h-12 rounded-full glass-dark hover:bg-white/15 hover:scale-110 flex items-center justify-center transition-all duration-300"
              >
                <link.icon className="w-5 h-5 text-white/80" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-1 h-2 bg-white/60 rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
