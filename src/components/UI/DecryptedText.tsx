import React, { useEffect, useMemo, useRef, useState } from 'react';

type Direction = 'left' | 'right' | 'center';

export type DecryptedTextProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
  text: string;
  className?: string;

  // Animation controls
  duration?: number;        // total reveal time (ms)
  delay?: number;           // delay before starting (ms)
  direction?: Direction;    // 'left' | 'right' | 'center'
  characters?: string;      // characters used for scrambling

  // Triggers
  startOnMount?: boolean;   // auto-start on mount (if not using startOnView)
  startOnView?: boolean;    // auto-start when enters viewport
  startOnHover?: boolean;   // replay on hover/focus/click

  // Auto-play only once per tab session (optional)
  oncePerSessionKey?: string;

  // Callback
  onComplete?: () => void;

  // Accessibility: use ariaLabel to control screen reader text (defaults to final text)
  ariaLabel?: string;
};

const DEFAULT_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+<>?/';

export default function DecryptedText({
  as,
  text,
  className,
  duration = 1200,
  delay = 0,
  direction = 'left',
  characters = DEFAULT_CHARS,
  startOnMount = true,
  startOnView = false,
  startOnHover = false,
  oncePerSessionKey,
  onComplete,
  ariaLabel,
  ...rest
}: DecryptedTextProps) {
  // Tag as 'any' avoids JSX's over-narrow inference that led to 'children: never'
  const Tag = (as ?? 'span') as any;

  const elRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const playingRef = useRef(false);
  const autoPlayedRef = useRef(false); // for once-per-session auto-play

  // Initialize "played once" state from sessionStorage
  useEffect(() => {
    if (!oncePerSessionKey) return;
    try {
      autoPlayedRef.current = sessionStorage.getItem(oncePerSessionKey) === '1';
    } catch {
      // ignore storage errors
    }
  }, [oncePerSessionKey]);

  // Split once
  const chars = useMemo(() => Array.from(text), [text]);
  const len = chars.length;

  // Start with a scrambled frame so the final text doesn’t flash
  const [output, setOutput] = useState(() => scrambleLike(text, characters));

  const start = (source: 'auto' | 'hover' = 'auto') => {
    if (playingRef.current) return;

    // Only gate auto-play with oncePerSessionKey
    if (source === 'auto' && oncePerSessionKey && autoPlayedRef.current) return;

    // mark auto-play as done for this session
    if (source === 'auto' && oncePerSessionKey) {
      autoPlayedRef.current = true;
      try {
        sessionStorage.setItem(oncePerSessionKey, '1');
      } catch {
        // ignore storage errors
      }
    }

    playingRef.current = true;
    startTimeRef.current = null;
    setOutput(scrambleLike(text, characters));
    frameRef.current = requestAnimationFrame(tick);
  };

  const stop = () => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = null;
    playingRef.current = false;
  };

  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  // Start when visible
  useEffect(() => {
    if (!startOnView) return;
    const node = elRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            start('auto');
            // no disconnect here; oncePerSessionKey gates repeat auto-plays
          }
        }
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [startOnView]);

  // Start on mount (only if not using startOnView)
  useEffect(() => {
    if (startOnMount && !startOnView) start('auto');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Hover/focus/click replay
  const hoverHandlers = startOnHover
    ? {
        onMouseEnter: () => start('hover'),
        onFocus: () => start('hover'),
        onClick: () => start('hover'),
      }
    : {};

  function tick(now: number) {
    if (startTimeRef.current === null) startTimeRef.current = now;

    const elapsed = now - startTimeRef.current;
    if (elapsed < delay) {
      frameRef.current = requestAnimationFrame(tick);
      return;
    }

    const t = Math.min(1, (elapsed - delay) / duration);
    const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
    const revealCount = Math.floor(eased * len);

    let next = '';
    switch (direction) {
      case 'right': {
        const startIndex = len - revealCount;
        for (let i = 0; i < len; i++) {
          const real = chars[i];
          if (real === ' ') { next += ' '; continue; }
          next += i >= startIndex ? real : randomChar(characters);
        }
        break;
      }
      case 'center': {
        const center = (len - 1) / 2;
        const radius = revealCount / 2;
        for (let i = 0; i < len; i++) {
          const real = chars[i];
          if (real === ' ') { next += ' '; continue; }
          const dist = Math.abs(i - center);
          next += dist <= radius ? real : randomChar(characters);
        }
        break;
      }
      case 'left':
      default: {
        for (let i = 0; i < len; i++) {
          const real = chars[i];
          if (real === ' ') { next += ' '; continue; }
          next += i < revealCount ? real : randomChar(characters);
        }
        break;
      }
    }

    setOutput(next);

    if (t < 1) {
      frameRef.current = requestAnimationFrame(tick);
    } else {
      stop();
      setOutput(text);
      onComplete?.();
    }
  }

  return (
    <Tag
      ref={elRef as any}
      className={className}
      aria-label={ariaLabel ?? text}
      aria-live="off"
      {...hoverHandlers}
      {...(rest as any)}
    >
      <span aria-hidden="true">{output}</span>
    </Tag>
  );
}

function randomChar(pool: string) {
  const i = Math.floor(Math.random() * pool.length);
  return pool[i] ?? ' ';
}

function scrambleLike(sample: string, pool: string) {
  let out = '';
  for (const ch of sample) out += ch === ' ' ? ' ' : randomChar(pool);
  return out;
}