import { useEffect, useRef, useState } from 'react';

type Props = {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
  loop?: boolean;
  respectReducedMotion?: boolean;
};

export default function LogoVideo({
  src,
  poster,
  className = '',
  ariaLabel,
  loop = true,
  respectReducedMotion = true,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Observe visibility to pause when off screen
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Respect reduced motion
  useEffect(() => {
    if (!respectReducedMotion) return;
    const el = ref.current;
    if (!el) return;

    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      if (mql.matches) el.pause();
      else if (inView) el.play().catch(() => {});
    };
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, [inView, respectReducedMotion]);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      muted
      playsInline
      autoPlay
      loop={loop}
      preload="auto"
      aria-label={ariaLabel}
      // decorative video
      aria-hidden={ariaLabel ? undefined : true}
    />
  );
}