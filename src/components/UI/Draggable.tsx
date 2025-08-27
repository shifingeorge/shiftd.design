import { useEffect, useRef, useState } from 'react';

type DraggableProps = {
  id: string; // unique key for localStorage
  defaultPct?: { x: number; y: number }; // initial position in percent of parent size
  disabled?: boolean; // when true, dragging is off
  className?: string;
  children: React.ReactNode;
};

/**
 * Absolute-positioned draggable wrapper.
 * Stores position as percentage in localStorage so it survives reloads and resizes gracefully.
 */
export default function Draggable({
  id,
  defaultPct = { x: 10, y: 10 },
  disabled = false,
  className = '',
  children,
}: DraggableProps) {
  const elRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ xPct: number; yPct: number }>(() => {
    try {
      const saved = localStorage.getItem(`drag-pos:${id}`);
      if (saved) return JSON.parse(saved);
    } catch {}
    return { xPct: defaultPct.x, yPct: defaultPct.y };
  });

  // Apply current percent as pixels (with clamping) whenever size changes
  const applyFromPercent = () => {
    const el = elRef.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    const parentRect = parent.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    const maxLeft = Math.max(0, parentRect.width - elRect.width);
    const maxTop = Math.max(0, parentRect.height - elRect.height);

    let left = (pos.xPct / 100) * parentRect.width;
    let top = (pos.yPct / 100) * parentRect.height;

    left = Math.min(Math.max(0, left), maxLeft);
    top = Math.min(Math.max(0, top), maxTop);

    el.style.left = `${left}px`;
    el.style.top = `${top}px`;
  };

  useEffect(() => {
    applyFromPercent();
    // Re-apply on resize
    const onResize = () => applyFromPercent();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pos.xPct, pos.yPct]);

  useEffect(() => {
    // Initial apply after first paint
    requestAnimationFrame(applyFromPercent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const el = elRef.current;
    const parent = el?.parentElement;
    if (!el || !parent || disabled) return;

    let dragging = false;
    let startX = 0, startY = 0;
    let startLeft = 0, startTop = 0;

    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      el.setPointerCapture(e.pointerId);
      const rect = el.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();

      startX = e.clientX;
      startY = e.clientY;
      startLeft = rect.left - parentRect.left;
      startTop = rect.top - parentRect.top;

      el.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      const parentRect = parent.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();

      let nextLeft = startLeft + (e.clientX - startX);
      let nextTop = startTop + (e.clientY - startY);

      const maxLeft = Math.max(0, parentRect.width - elRect.width);
      const maxTop = Math.max(0, parentRect.height - elRect.height);

      nextLeft = Math.min(Math.max(0, nextLeft), maxLeft);
      nextTop = Math.min(Math.max(0, nextTop), maxTop);

      el.style.left = `${nextLeft}px`;
      el.style.top = `${nextTop}px`;
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      el.releasePointerCapture(e.pointerId);
      el.style.cursor = '';
      document.body.style.userSelect = '';

      const parentRect = parent.getBoundingClientRect();
      const leftPx = parseFloat(el.style.left || '0');
      const topPx = parseFloat(el.style.top || '0');

      const xPct = (leftPx / parentRect.width) * 100;
      const yPct = (topPx / parentRect.height) * 100;

      const next = { xPct, yPct };
      setPos(next);
      try {
        localStorage.setItem(`drag-pos:${id}`, JSON.stringify(next));
      } catch {}
    };

    el.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    return () => {
      el.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, [disabled]);

  return (
    <div
      ref={elRef}
      className={[
        'absolute touch-none select-none will-change-transform',
        disabled ? 'cursor-default' : 'cursor-grab',
        className,
      ].join(' ')}
      style={{ left: 0, top: 0 }}
    >
      {children}
    </div>
  );
}