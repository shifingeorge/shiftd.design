import Reveal, { RevealGroup } from '../UI/Reveal';

export default function About() {
  return (
    <section id="about" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 min-h-[100svh] md:min-h-[100dvh] flex items-center">
        <div className="w-full">
          {/* Smaller label-style heading */}
          <Reveal y={20} scale={0.95} duration={0.8}>
            <h2 className="text-sm md:text-base font-medium tracking-[0.15em] uppercase text-white/60">
              About
            </h2>
          </Reveal>

          {/* Bigger copy with staggered reveal */}
          <RevealGroup className="mt-6 space-y-8 md:space-y-10" stagger={0.12} y={36} scale={0.95} duration={0.95}>
            <p className="text-3xl md:text-4xl leading-[1.35] text-white/85 max-w-5xl">
              I’m Shiftd (Shifin) — a product designer and vibe coder crafting calm, high‑contrast
              interfaces. I blend systems thinking with motion so digital tools feel effortlessly clear.
            </p>

            <p className="text-3xl md:text-4xl leading-[1.35] text-white/80 max-w-5xl">
              From UX flows and design systems to front‑end implementation, I design for focus,
              accessibility, and flow — shipping work that’s clean, fast, and considered.
            </p>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}