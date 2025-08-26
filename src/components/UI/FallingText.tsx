import { useRef, useState, useEffect } from 'react';
import Matter from 'matter-js';

interface FallingTextProps {
  text?: string;
  highlightWords?: string[];
  highlightClass?: string;
  trigger?: 'auto' | 'scroll' | 'click' | 'hover';
  backgroundColor?: string;      // canvas background
  wireframes?: boolean;
  gravity?: number;              // 0.0 - 1.0 (world gravity Y)
  mouseConstraintStiffness?: number;
  fontSize?: string;
  className?: string;            // wrapper classes
}

export default function FallingText({
  text = '',
  highlightWords = [],
  highlightClass = 'text-brand font-semibold',
  trigger = 'auto',
  backgroundColor = 'transparent',
  wireframes = false,
  gravity = 0.6,
  mouseConstraintStiffness = 0.2,
  fontSize = '1rem',
  className = '',
}: FallingTextProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);

  // Render words (with optional highlight)
  useEffect(() => {
    if (!textRef.current) return;
    const safe = (s: string) =>
      s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const words = text.trim().split(/\s+/);
    const html = words
      .map((w) => {
        const isHL = highlightWords.some((hw) => w.startsWith(hw));
        return `<span class="inline-block mx-[3px] select-none ${
          isHL ? highlightClass : ''
        }">${safe(w)}</span>`;
      })
      .join(' ');
    textRef.current.innerHTML = html;
  }, [text, highlightWords, highlightClass]);

  // Trigger logic
  useEffect(() => {
    if (trigger === 'auto') {
      setStarted(true);
      return;
    }
    if (trigger === 'scroll' && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [trigger]);

  // Physics (single rAF loop; no Runner/Render duplication)
  useEffect(() => {
    if (!started) return;
    if (!containerRef.current || !textRef.current) return;

    const {
      Engine,
      World,
      Bodies,
      Mouse,
      MouseConstraint,
      Body,
      Events,
    } = Matter;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const width = rect.width || 600;
    const height = rect.height || 240;

    // Create engine
    const engine = Engine.create();
    engine.world.gravity.y = gravity;

    // Static boundaries
    const wallOpts = { isStatic: true, restitution: 0.1, friction: 0.2 };
    const floor = Bodies.rectangle(width / 2, height + 40, width + 80, 80, wallOpts);
    const left = Bodies.rectangle(-40, height / 2, 80, height + 80, wallOpts);
    const right = Bodies.rectangle(width + 40, height / 2, 80, height + 80, wallOpts);
    const ceiling = Bodies.rectangle(width / 2, -40, width + 80, 80, wallOpts);

    // Build bodies for every span
    const spans = Array.from(textRef.current.querySelectorAll<HTMLSpanElement>('span'));
    const bodies = spans.map((el) => {
      // absolute position
      el.style.position = 'absolute';
      el.style.left = '0px';
      el.style.top = '0px';
      el.style.transform = 'translate(-50%, -50%)';

      const b = el.getBoundingClientRect();
      const x = b.left - rect.left + b.width / 2;
      const y = b.top - rect.top + b.height / 2;

      const body = Bodies.rectangle(x, y, b.width, b.height, {
        restitution: 0.8,
        frictionAir: 0.02,
        friction: 0.2,
      });

      // small kick
      Body.setVelocity(body, { x: (Math.random() - 0.5) * 2, y: 0 });
      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.06);
      return { el, body };
    });

    // Mouse drag
    const mouse = Mouse.create(container);
    const mc = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false },
      },
    });

    World.add(engine.world, [floor, left, right, ceiling, mc, ...bodies.map((w) => w.body)]);

    // rAF loop
    let rafId = 0;
    const loop = () => {
      Engine.update(engine, 1000 / 60);

      for (const { el, body } of bodies) {
        el.style.left = `${body.position.x}px`;
        el.style.top = `${body.position.y}px`;
        el.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
      }

      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    // Resize: basic reflow
    const onResize = () => {
      // no full rebuild here for perf; optional to implement if needed
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [started, gravity, mouseConstraintStiffness]);

  const handleUserStart = () => {
    if (!started && (trigger === 'click' || trigger === 'hover')) setStarted(true);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[220px] md:h-[260px] overflow-hidden ${className}`}
      onClick={trigger === 'click' ? handleUserStart : undefined}
      onMouseEnter={trigger === 'hover' ? handleUserStart : undefined}
      style={{ background: backgroundColor }}
    >
      <div
        ref={textRef}
        className="inline-block"
        style={{ fontSize, lineHeight: 1.2, color: 'inherit' }}
      />
    </div>
  );
}