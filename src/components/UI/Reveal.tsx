/* src/components/UI/Reveal.tsx */
import { useLayoutEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;     // seconds
  duration?: number;  // seconds
  y?: number;
  x?: number;
  scale?: number;
  once?: boolean;
  start?: string;     // ScrollTrigger start
};

export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.9,
  y = 32,
  x = 0,
  scale = 0.96,
  once = true,
  start = 'top 80%',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y, x, scale, autoAlpha: 0 },
        {
          y: 0,
          x: 0,
          scale: 1,
          autoAlpha: 1,
          duration,
          delay,
          ease: 'power3.out',
          overwrite: 'auto',
          scrollTrigger: {
            trigger: el,
            start,
            once,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [delay, duration, x, y, scale, once, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* Optional: container that staggers children in one ScrollTrigger */
export function RevealGroup({
  children,
  className,
  stagger = 0.1,
  y = 32,
  x = 0,
  scale = 0.96,
  duration = 0.9,
  start = 'top 85%',
  once = true,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
  start?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll('[data-reveal-item]'));
    if (!items.length) return;

    const ctx = gsap.context(() => {
      gsap.set(items, { y, x, scale, autoAlpha: 0 });

      gsap.to(items, {
        y: 0,
        x: 0,
        scale: 1,
        autoAlpha: 1,
        duration,
        ease: 'power3.out',
        stagger,
        scrollTrigger: {
          trigger: root,
          start,
          once,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [stagger, y, x, scale, duration, start, once]);

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((c, i) => (
            <div key={i} data-reveal-item>
              {c}
            </div>
          ))
        : <div data-reveal-item>{children}</div>}
    </div>
  );
}