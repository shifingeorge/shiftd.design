import { motion } from 'framer-motion';
import type { HTMLAttributes, ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  blur?: number;
  once?: boolean; // reveal only once per visit
} & HTMLAttributes<HTMLDivElement>;

export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 16,
  x = 0,
  blur = 6,
  once = true,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }}
      viewport={{ once, amount: 0.3 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}