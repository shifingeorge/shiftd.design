import { useRef } from 'react';
import LogoVideo from '../UI/LogoVideo';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="home" ref={sectionRef} className="relative">
      <div
        className="
          relative z-10 mx-auto max-w-6xl px-4 min-h-[80svh] md:min-h-[80dvh]
          flex items-center justify-center
        "
      >
        {/* Centered block, content left-aligned */}
        <div className="w-full max-w-2xl flex flex-col items-start text-left gap-6 md:gap-8">
          {/* Logo video above text */}
          <div className="neon-stroke h-24 w-24 md:h-28 md:w-28 overflow-hidden rounded-2xl">
            <LogoVideo
              src="/media/logo.mp4"
              poster="/media/logo-poster.jpg"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Static text (no decrypt) */}
          <div className="space-y-2">
            <p className="font-pixel text-base md:text-lg text-white/85">
              Shifin a.k.a Shiftd.design
            </p>
            <p className="font-pixel text-base md:text-lg text-white/75">
              Product designer & vibe coder crafting calm, high‑contrast interfaces.
            </p>
            <p className="font-pixel text-base md:text-lg text-white/75">
              I blend systems thinking with motion so digital tools feel effortlessly clear. My work favors
              accessibility, performance, and small delights that make products feel human.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}