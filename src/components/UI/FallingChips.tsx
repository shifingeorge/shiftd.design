// src/components/UI/FallingChips.tsx
import { useEffect, useMemo, useRef, useState } from 'react';
import Matter from 'matter-js';

type Props = {
  items: string[];
  trigger?: 'auto' | 'scroll' | 'click' | 'hover';
  height?: string;                 // CSS height for the arena (e.g., '320px')
  gravity?: number;                // 0..1
  bounce?: number;                 // restitution
  airFriction?: number;            // frictionAir
  chipClassName?: string;          // base chip styles
  palette?: string[];              // classNames per chip color
  mouseDrag?: boolean;             // enable drag
  className?: string;              // container classes
};

export default function FallingChips({
  items,
  trigger = 'scroll',
  height = '340px',
  gravity = 0.58,
  bounce = 0.8,
  airFriction = 0.02,
  chipClassName = 'rounded-xl border px-3 py-2 md:px-4 md:py-3 text-sm md:text-base font-medium',
  palette,
  mouseDrag = false,
  className = '',
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);

  // default pastel palette (Tailwind classes)
  const colors = useMemo(
    () =>
      palette ?? [
        'bg-rose-500/15 text-rose-100 border-rose-400/25',
        'bg-orange-500/15 text-orange-100 border-orange-400/25',
        'bg-amber-500/15 text-amber-100 border-amber-400/25',
        'bg-lime-500/15 text-lime-100 border-lime-400/25',
        'bg-emerald-500/15 text-emerald-100 border-emerald-400/25',
        'bg-teal-500/15 text-teal-100 border-teal-400/25',
        'bg-cyan-500/15 text-cyan-100 border-cyan-400/25',
        'bg-sky-500/15 text-sky-100 border-sky-400/25',
        'bg-blue-500/15 text-blue-100 border-blue-400/25',
        'bg-indigo-500/15 text-indigo-100 border-indigo-400/25',
        'bg-violet-500/15 text-violet-100 border-violet-400/25',
        'bg-fuchsia-500/15 text-fuchsia-100 border-fuchsia-400/25',
        'bg-pink-500/15 text-pink-100 border-pink-400/25',
      ],
    [palette]
  );

  // Trigger start
  useEffect(() => {
    if (trigger === 'auto') {
      setStarted(true);
      return;
    }
    if (trigger === 'scroll' && containerRef.current) {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setStarted(true);
            obs.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(containerRef.current);
      return () => obs.disconnect();
    }
    // hover/click handled by handlers below
  }, [trigger]);

  // Physics loop
  useEffect(() => {
    if (!started) return;
    if (!containerRef.current || !gridRef.current) return;

    const {
      Engine,
      World,
      Bodies,
      Body,
      Mouse,
      MouseConstraint,
      Composite,
    } = Matter;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const width = rect.width || 600;
    const heightPx = parseFloat(height) || 340;

    // Create engine
    const engine = Engine.create({ enableSleeping: true });
    engine.world.gravity.y = gravity;

    // All chips (divs) inside gridRef
    const chips = Array.from(gridRef.current.querySelectorAll<HTMLDivElement>('[data-chip]'));

    // Convert each chip to absolute-positioned and build a body
    const chipBodies = chips.map((el) => {
      // measure before making absolute
      const b = el.getBoundingClientRect();
      const x = b.left - rect.left + b.width / 2;
      const y = b.top - rect.top + b.height / 2;

      el.style.position = 'absolute';
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.transform = 'translate(-50%, -50%)';
      el.style.willChange = 'transform, left, top';

      const body = Bodies.rectangle(x, y, b.width, b.height, {
        restitution: bounce,
        frictionAir: airFriction,
        friction: 0.2,
      });
      Body.setVelocity(body, { x: (Math.random() - 0.5) * 1.5, y: 0 });
      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.06);
      return { el, body };
    });

    // Static walls
    const wallOpts = { isStatic: true, restitution: 0.1, friction: 0.2 };
    const floor = Bodies.rectangle(width / 2, heightPx + 40, width + 80, 80, wallOpts);
    const left = Bodies.rectangle(-40, heightPx / 2, 80, heightPx + 80, wallOpts);
    const right = Bodies.rectangle(width + 40, heightPx / 2, 80, heightPx + 80, wallOpts);
    const ceiling = Bodies.rectangle(width / 2, -40, width + 80, 80, wallOpts);

    // Add to world
    World.add(engine.world, [floor, left, right, ceiling, ...chipBodies.map((c) => c.body)]);

    // Drag
    let mc: Matter.MouseConstraint | undefined;
    if (mouseDrag) {
      const mouse = Mouse.create(container);
      mc = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.2, render: { visible: false } },
      });
      World.add(engine.world, mc);
    }

    // rAF loop
    let rafId = 0;
    const loop = () => {
      Matter.Engine.update(engine, 1000 / 60);
      for (const { el, body } of chipBodies) {
        el.style.left = `${body.position.x}px`;
        el.style.top = `${body.position.y}px`;
        el.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    // Rebuild on resize (simple approach)
    const onResize = () => {
      cancelAnimationFrame(rafId);
      Composite.clear(engine.world, false);
      Matter.Engine.clear(engine);
      // Reload by toggling started
      setStarted(false);
      setTimeout(() => setStarted(true), 0);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      Composite.clear(engine.world, false);
      Matter.Engine.clear(engine);
    };
  }, [started, height, gravity, bounce, airFriction, mouseDrag]);

  const handleUserStart = () => {
    if (!started && (trigger === 'hover' || trigger === 'click')) setStarted(true);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-3xl ${className}`}
      style={{ height }}
      onMouseEnter={trigger === 'hover' ? handleUserStart : undefined}
      onClick={trigger === 'click' ? handleUserStart : undefined}
    >
      {/* Grid for initial layout; chips get absolutized when physics starts */}
      <div
        ref={gridRef}
        className="relative grid gap-3 md:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-3 md:p-4"
      >
        {items.map((label, i) => (
          <div
            key={label}
            data-chip
            className={`${chipClassName} ${colors[i % colors.length]} border`}
            style={{ userSelect: 'none' }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}