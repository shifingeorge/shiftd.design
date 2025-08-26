import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

type Item = {
  id: string;
  href?: string;
  ariaLabel?: string;
  element: React.ReactNode;
};

type Props = {
  items: Item[];
  trigger?: 'scroll' | 'auto' | 'hover' | 'click';
  gravity?: number;          // 0..1
  restitution?: number;      // bounciness
  airFriction?: number;      // frictionAir
  allowDrag?: boolean;       // mouse drag
  className?: string;
};

export default function SocialFall({
  items,
  trigger = 'scroll',
  gravity = 0.6,
  restitution = 0.9,
  airFriction = 0.02,
  allowDrag = false,
  className = '',
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);

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
  }, [trigger]);

  useEffect(() => {
    if (!started) return;
    if (!containerRef.current || !listRef.current) return;

    const {
      Engine,
      World,
      Bodies,
      Body,
      Mouse,
      MouseConstraint,
      Composite,
    } = Matter;

    const wrap = containerRef.current;
    const rect = wrap.getBoundingClientRect();
    const width = rect.width || 300;
    const height = rect.height || 300;

    const engine = Engine.create({ enableSleeping: true });
    engine.world.gravity.y = gravity;

    // Build DOM nodes (anchors for links) and measure
    const nodeList = Array.from(listRef.current.querySelectorAll<HTMLElement>('[data-icon]'));

    // Absolutize and create bodies
    const nodes = nodeList.map((el) => {
      const b = el.getBoundingClientRect();
      const x = b.left - rect.left + b.width / 2;
      const y = b.top - rect.top + b.height / 2;

      el.style.position = 'absolute';
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.transform = 'translate(-50%, -50%)';
      el.style.willChange = 'transform, left, top';

      const body = Bodies.rectangle(x, y, b.width, b.height, {
        restitution,
        frictionAir: airFriction,
        friction: 0.2,
      });

      // small initial nudge
      Body.setVelocity(body, { x: (Math.random() - 0.5) * 1.5, y: 0 });
      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.06);

      return { el, body };
    });

    // Walls
    const wallOpts = { isStatic: true, restitution: 0.1, friction: 0.2 };
    const floor = Bodies.rectangle(width / 2, height + 40, width + 80, 80, wallOpts);
    const left = Bodies.rectangle(-40, height / 2, 80, height + 80, wallOpts);
    const right = Bodies.rectangle(width + 40, height / 2, 80, height + 80, wallOpts);
    const ceiling = Bodies.rectangle(width / 2, -40, width + 80, 80, wallOpts);

    World.add(engine.world, [floor, left, right, ceiling, ...nodes.map((n) => n.body)]);

    // Optional drag
    let mc: Matter.MouseConstraint | undefined;
    if (allowDrag) {
      const mouse = Mouse.create(wrap);
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
      for (const { el, body } of nodes) {
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
  }, [started, gravity, restitution, airFriction, allowDrag]);

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      {/* Initial layout: icons centered. Will be absolutized on start */}
      <div
        ref={listRef}
        className="relative w-full h-full grid place-items-center"
      >
        <div className="flex items-center justify-center gap-4 md:gap-6" aria-hidden={false}>
          {items.map((it) => {
            const content = (
              <div
                key={it.id}
                data-icon
                className="inline-flex items-center justify-center"
                style={{ fontSize: '1.75rem', lineHeight: 1 }}
                aria-label={it.ariaLabel}
              >
                {it.element}
              </div>
            );
            return it.href ? (
              <a key={it.id} href={it.href} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              content
            );
          })}
        </div>
      </div>
    </div>
  );
}