import { useRef } from 'react';
import Dither from '../UI/Dither';
import DecryptedText from '../UI/DecryptedText';
import LogoVideo from '../UI/LogoVideo';

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

      {/* Content: centered, minimal, with breathing room above the dock */}
      <div className="relative z-10 mx-auto max-w-3xl px-4
                      min-h-[100svh] md:min-h-[100dvh]
                      flex items-center justify-center text-center
                      pb-[calc(72px+1rem)]">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          {/* Logo video */}
          {/* Logo video with neon stroke (no background fill) */}
          <div className="neon-stroke h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 overflow-hidden rounded-2xl">
            <LogoVideo
            src="/media/logo.mp4"
            poster="/media/logo-poster.jpg"
            className="h-full w-full object-cover"
            />
          </div>

          {/* Name */}
          <DecryptedText
            as="h1"
            text="Shiftd"
            className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight"
            startOnView
            startOnHover
            oncePerSessionKey="hero-name"
            direction="center"
            duration={1000}
          />

          {/* Description: short, on-brand */}
          <DecryptedText
            as="p"
            text="Product designer & vibe coder crafting calm, high‑contrast interfaces."
            className="text-lg md:text-2xl text-white/70"
            startOnView
            startOnHover
            oncePerSessionKey="hero-tag"
            direction="left"
            duration={900}
            delay={120}
          />
        </div>
      </div>
    </section>
  );
}