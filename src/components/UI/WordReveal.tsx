import React, { useLayoutEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export type WordRevealProps = {
  text: string;
  as?: React.ElementType;        // e.g. 'p', 'h1'
  className?: string;            // applied to the rendered tag
  containerClassName?: string;   // applied to the outer wrapper
  wordClassName?: string;        // optional per-word class

  // Animation (seconds)
  stagger?: number;              // gap between words
  duration?: number;             // per-word duration
  delay?: number;                // sequence delay
  ease?: gsap.EaseString;

  // Motion
  y?: number;                    // initial offset
  start?: string;                // ScrollTrigger start
  once?: boolean;                // play once
};

export default function WordReveal({
  text,
  as,
  className,
  containerClassName,
  wordClassName,
  stagger = 0.12,
  duration = 1.2,
  delay = 0,
  ease = 'expo.out',
  y = 48,
  start = 'top 94%',
  once = true,
}: WordRevealProps) {
  const Tag = (as ?? 'p') as React.ElementType;
  const ref = useRef<HTMLDivElement>(null);

  // Split words; collapse multiple spaces
  const words = useMemo(() => text.trim().split(/\s+/), [text]);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;

    // Respect reduced motion
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mql.matches) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>('[data-word]'));
    if (!items.length) return;

    const ctx = gsap.context(() => {
      gsap.set(items, { y, autoAlpha: 0, willChange: 'transform, opacity' });

      gsap.to(items, {
        y: 0,
        autoAlpha: 1,
        duration,
        ease,
        stagger,
        delay,
        overwrite: 'auto',
        scrollTrigger: {
          trigger: root,
          start,
          once,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [stagger, duration, delay, ease, y, start, once]);

  // Children array ensures spaces render correctly
  const children = words.flatMap((w, i) => [
    <span
      key={`w-${i}`}
      data-word
      className={wordClassName}
      style={{ display: 'inline-block' }}
    >
      {w}
    </span>,
    i < words.length - 1 ? ' ' : null,
  ]);

  return (
    <div ref={ref} className={containerClassName}>
      {React.createElement(Tag, { className }, children)}
    </div>
  );
}