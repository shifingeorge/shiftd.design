import { useRef } from 'react';
import Dither from '../UI/Dither';
import DecryptedText from '../UI/DecryptedText';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="home" ref={sectionRef} className="relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Dither
          eventSourceRef={sectionRef}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.32}
          colorNum={4}
          waveAmplitude={0.32}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      {/* Content: bottom-left aligned, with padding above dock */}
      <div
        className="
          relative z-10 mx-auto max-w-6xl px-4
          min-h-[100svh] md:min-h-[100dvh]
          flex items-end justify-start
          pb-[calc(68px+1.5rem)]  /* keep clear of the dock (panelHeight 68 + margin) */
        "
      >
        <div className="space-y-3 text-left">
          <DecryptedText
            as="h1"
            text="Human‑first UI,"
            className="block text-5xl md:text-8xl font-extrabold leading-[0.95] tracking-tight"
            startOnView
            startOnHover
            oncePerSessionKey="hero-line-1"
            direction="left"
            duration={1100}
          />
          <DecryptedText
            as="h1"
            text="vibe‑coded."
            className="block text-5xl md:text-8xl font-extrabold leading-[0.95] tracking-tight text-brand"
            startOnView
            startOnHover
            oncePerSessionKey="hero-line-2"
            direction="right"
            duration={1200}
            delay={120}
          />
          <DecryptedText
            as="p"
            text="Shiftd (Shifin) — product designer and vibe coder crafting calm, high‑contrast experiences."
            className="text-base md:text-xl text-white/70 max-w-2xl"
            startOnView
            startOnHover
            oncePerSessionKey="hero-sub"
            direction="center"
            duration={900}
            delay={180}
          />
        </div>
      </div>
    </section>
  );
}