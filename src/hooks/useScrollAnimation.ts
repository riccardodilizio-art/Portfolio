import { useRef } from 'react';
import { useInView } from 'motion/react';

export function useScrollAnimation(amount = 0.3) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount });

  return { ref, isInView } as const;
}
