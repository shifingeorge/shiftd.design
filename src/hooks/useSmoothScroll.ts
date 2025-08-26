import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Options = {
  enabled?: boolean;
  lerp?: number;            // 0..1 (lower = smoother/laggier)
  wheelMultiplier?: number; // scroll speed multiplier (wheel)
  touchMultiplier?: number; // scroll speed multiplier (touch)
};

export default function useSmoothScroll({
  enabled = true,
  lerp = 1,
  wheelMultiplier = 1,
  touchMultiplier = 1,
}: Options = {}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!enabled) return;

    // Respect reduced motion
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mql.matches) return;

    // Lenis v1 uses "smooth" instead of smoothWheel/smoothTouch; keep options minimal
    const lenis = new Lenis({
      lerp,
      wheelMultiplier,
      touchMultiplier,
      smooth: true,
    } as unknown as ConstructorParameters<typeof Lenis>[0]); // cast for broad version compatibility

    lenisRef.current = lenis;

    // Keep ScrollTrigger synced with Lenis
    const onLenisScroll = () => ScrollTrigger.update();
    lenis.on('scroll', onLenisScroll);

    // Drive Lenis with rAF (ms timestamp)
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.off('scroll', onLenisScroll as any);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [enabled, lerp, wheelMultiplier, touchMultiplier]);

  return lenisRef;
}