import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../../data/skills';
import FallingText from '../UI/FallingText';

gsap.registerPlugin(ScrollTrigger);

const chipColors = [
  'bg-rose-500/15 text-rose-200 border-rose-400/30',
  'bg-orange-500/15 text-orange-200 border-orange-400/30',
  'bg-amber-500/15 text-amber-200 border-amber-400/30',
  'bg-lime-500/15 text-lime-200 border-lime-400/30',
  'bg-emerald-500/15 text-emerald-200 border-emerald-400/30',
  'bg-teal-500/15 text-teal-200 border-teal-400/30',
  'bg-cyan-500/15 text-cyan-200 border-cyan-400/30',
  'bg-sky-500/15 text-sky-200 border-sky-400/30',
  'bg-blue-500/15 text-blue-200 border-blue-400/30',
  'bg-indigo-500/15 text-indigo-200 border-indigo-400/30',
  'bg-violet-500/15 text-violet-200 border-violet-400/30',
  'bg-fuchsia-500/15 text-fuchsia-200 border-fuchsia-400/30',
  'bg-pink-500/15 text-pink-200 border-pink-400/30',
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP drop-in animation for chips
  useLayoutEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mql.matches) return;

    const items = gsap.utils.toArray<HTMLElement>(root.querySelectorAll('[data-skill-item]'));
    if (!items.length) return;

    const ctx = gsap.context(() => {
      gsap.set(items, {
        y: (i) => gsap.utils.random(-120, -180),
        rotate: (i) => gsap.utils.random(-8, 8),
        autoAlpha: 0,
      });

      gsap.to(items, {
        y: 0,
        rotate: 0,
        autoAlpha: 1,
        duration: 1.05,
        ease: 'back.out(1.6)',
        stagger: { each: 0.07, from: 'random' },
        scrollTrigger: {
          trigger: root,
          start: 'top 85%',
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 min-h-[100svh] md:min-h-[100dvh] flex items-center">
        {/* Off-white panel */}
        <div
          ref={containerRef}
          className="
            w-full rounded-3xl border border-white/10
            bg-[#f6f4ee] text-neutral-900
            p-5 md:p-8
          "
        >
          {/* Heading matches About */}
          <h2 className="text-xs md:text-sm font-medium tracking-[0.16em] uppercase text-neutral-600">
            Skills
          </h2>

          {/* FallingText intro line (triggered on scroll) */}
          <div className="mt-4">
            <FallingText
              text="React TypeScript GSAP Motion Systems Accessibility Performance Design‑Systems Prototyping Testing SVG Three.js"
              highlightWords={['React', 'TypeScript', 'GSAP']}
              highlightClass="text-red-600 font-semibold"
              trigger="scroll"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="1.5rem"
              mouseConstraintStiffness={0.9}
              className="rounded-xl"
            />
          </div>

          {/* Chips */}
          <div className="mt-6">
            <div
              className="
                grid gap-3 md:gap-4
                grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
              "
            >
              {skills.map((s, i) => (
                <div
                  key={s}
                  data-skill-item
                  className={`
                    rounded-xl border px-3 py-2 md:px-4 md:py-3 text-sm md:text-base
                    ${chipColors[i % chipColors.length]}
                  `}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}