import { useRef } from 'react';
import LogoVideo from '../UI/LogoVideo';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="home" ref={sectionRef} className="relative">
      <div
        className="
          relative z-10 w-full pl-8 pr-4 md:pl-16 md:pr-6 min-h-[80svh] md:min-h-[80dvh]
          flex items-center
        "
      >
        {/* Left-anchored block, vertically centered */}
        <div className="mr-auto w-full max-w-2xl flex flex-col items-start text-left gap-6 md:gap-8">
          <div className="neon-stroke h-24 w-24 md:h-28 md:w-28 overflow-hidden rounded-2xl">
            <LogoVideo
              src="/media/logo.mp4"
              poster="/media/logo-poster.jpg"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-3">
            <p className="font-pixel text-3xl md:text-4xl text-white/85 leading-tight">
              Shifin a.k.a Shif.td
            </p>
            <p className="font-pixel text-xl md:text-2xl text-white/75 leading-relaxed">
              Product designer & vibe coder crafting calm, high‑contrast interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}