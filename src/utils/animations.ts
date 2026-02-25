import type { Variants, Transition } from 'motion/react';

export const fadeInUp = (delay = 0): { initial: object; animate: object; transition: Transition } => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export const fadeInLeft = (delay = 0): { initial: object; animate: object; transition: Transition } => ({
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay },
});

export const fadeInRight = (delay = 0): { initial: object; animate: object; transition: Transition } => ({
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay },
});

export const scaleIn = (delay = 0): { initial: object; animate: object; transition: Transition } => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, delay },
});

export const staggerDelay = (index: number, base = 0.1, step = 0.05) =>
  base + index * step;

export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
