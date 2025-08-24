import { useRef } from 'react';
import Dither from '../UI/Dither';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="home" ref={sectionRef} className="relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Dither
          eventSourceRef={sectionRef}
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      {/* Content: fill viewport minus header height */}
      <div className="relative z-10 mx-auto max-w-6xl px-4
                      min-h-[calc(100svh-4rem)] md:min-h-[calc(100dvh-4rem)]
                      flex items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Portfolio</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
            UI/UX Designer <span className="text-white/60">&</span> Vibe Coder
          </h1>
          <p className="mt-4 max-w-2xl text-white/70">
            I design delightful interfaces and code smooth, animated experiences.
            Clean systems, high contrast, tasteful motion.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#portfolio" className="rounded-md bg-white text-black px-5 py-3 text-sm font-semibold hover:opacity-90">
              View Work
            </a>
            <a href="#contact" className="rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}