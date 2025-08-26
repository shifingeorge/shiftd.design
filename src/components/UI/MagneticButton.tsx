import { useEffect, useRef } from 'react';

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  strength?: number; // max translation in px
  ariaLabel?: string;
};

export default function MagneticButton({
  href,
  children,
  className = '',
  strength = 30,
  ariaLabel,
}: MagneticButtonProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const btn = btnRef.current;
    if (!wrapper || !btn) return;

    const isFine = window.matchMedia('(pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFine || reduceMotion) return;

    let raf = 0;
    let cx = 0, cy = 0;
    let tx = 0, ty = 0;

    const animate = () => {
      cx += (tx - cx) * 0.15;
      cy += (ty - cy) * 0.15;
      btn.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) {
        raf = requestAnimationFrame(animate);
      } else {
        raf = 0;
      }
    };

    const onMove = (e: PointerEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      tx = (x / (rect.width / 2)) * strength;
      ty = (y / (rect.height / 2)) * strength;
      if (!raf) raf = requestAnimationFrame(animate);
    };

    const onLeave = () => {
      tx = 0;
      ty = 0;
      if (!raf) raf = requestAnimationFrame(animate);
    };

    wrapper.addEventListener('pointermove', onMove);
    wrapper.addEventListener('pointerleave', onLeave);

    return () => {
      wrapper.removeEventListener('pointermove', onMove);
      wrapper.removeEventListener('pointerleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
      btn.style.transform = '';
    };
  }, [strength]);

  return (
    <div ref={wrapperRef} className="relative grid h-full w-full place-items-center">
      <a
        ref={btnRef}
        href={href}
        aria-label={ariaLabel}
        className={[
          'select-none will-change-transform inline-flex items-center justify-center',
          'rounded-xl px-6 py-4 text-base md:text-lg font-medium tracking-wide',
          'text-white/90 bg-white/10 hover:bg-white/15 border border-white/15',
          'shadow-[0_0_40px_-10px_rgba(0,200,255,0.35)] backdrop-blur transition-colors',
          className,
        ].join(' ')}
      >
        {children}
      </a>
    </div>
  );
}