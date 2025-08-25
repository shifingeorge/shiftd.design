import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  type MotionValue,
} from 'framer-motion';
import React, {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from 'react';

export type DockItemData = {
  icon: React.ReactNode;
  label: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export type DockProps = {
  items: DockItemData[];
  className?: string;
  distance?: number;
  panelHeight?: number;
  baseItemSize?: number;
  magnification?: number;
  spring?: Parameters<typeof useSpring>[1];
};

/* -------------------------------- Desktop Dock ------------------------------- */

type DockItemProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  mouseX: MotionValue<number>;
  spring: Parameters<typeof useSpring>[1];
  distance: number;
  baseItemSize: number;
  magnification: number;
};

type HoverableChildProps = { isHovered?: MotionValue<number> };

function DesktopDockItem({
  children,
  className = '',
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: baseItemSize };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-full bg-[#0b0b0f] border border-white/10 shadow-md ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, (child) =>
        isValidElement(child)
          ? cloneElement(child as React.ReactElement<HoverableChildProps>, { isHovered })
          : child
      )}
    </motion.div>
  );
}

function DockLabel({
  children,
  className = '',
  isHovered,
}: {
  className?: string;
  children: React.ReactNode;
  isHovered?: MotionValue<number>;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isHovered) return;
    const unsub = isHovered.on('change', (latest) => setIsVisible(latest === 1));
    return () => unsub();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`${className} absolute -top-6 left-1/2 w-fit whitespace-pre rounded-md border border-white/10 bg-[#0b0b0f] px-2 py-0.5 text-xs text-white`}
          role="tooltip"
          style={{ x: '-50%' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({
  children,
  className = '',
}: {
  className?: string;
  children: React.ReactNode;
  isHovered?: MotionValue<number>;
}) {
  return <div className={`flex items-center justify-center ${className}`}>{children}</div>;
}

function DesktopDock({
  items,
  className = '',
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 64,
  baseItemSize = 50,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div
      className="fixed z-50 left-0 right-0 bottom-[max(1rem,env(safe-area-inset-bottom))] pointer-events-none hidden md:block"
      aria-label="Application dock container"
    >
      <div className="flex justify-center">
        <div
          onMouseMove={(e) => mouseX.set(e.clientX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className={`
            ${className}
            pointer-events-auto
            flex items-end w-fit gap-4
            rounded-2xl border border-white/10
            bg-[#0b0b0f]/85 backdrop-blur px-3 pb-2
            shadow-[0_2px_20px_rgba(0,0,0,0.35)]
          `}
          style={{ height: panelHeight }}
          role="toolbar"
          aria-label="Application dock"
        >
          {items.map((item, index) => (
            <DesktopDockItem
              key={index}
              onClick={item.onClick}
              className={item.className}
              mouseX={mouseX}
              spring={spring}
              distance={distance}
              magnification={magnification}
              baseItemSize={baseItemSize}
            >
              <DockIcon>{item.icon}</DockIcon>
              <DockLabel>{item.label}</DockLabel>
            </DesktopDockItem>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------- Mobile Dock -------------------------------- */

function MobileDock({ items, className = '' }: DockProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on click outside / Escape
  useEffect(() => {
    function onDown(e: MouseEvent | TouchEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDown);
    document.addEventListener('touchstart', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('touchstart', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed z-50 bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 md:hidden"
      aria-label="Mobile dock"
    >
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className={`
              ${className}
              mb-3 flex flex-col items-end gap-2
              rounded-2xl border border-white/10
              bg-[#0b0b0f]/85 backdrop-blur px-2 pt-2 pb-2
              shadow-[0_2px_20px_rgba(0,0,0,0.35)]
            `}
            role="menu"
            aria-label="Mobile navigation menu"
          >
            {items.map((item, i) => (
              <motion.button
                key={i}
                type="button"
                onClick={() => {
                  setOpen(false);
                  item.onClick();
                }}
                className="relative w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#0b0b0f] border border-white/10 text-white"
                title={typeof item.label === 'string' ? item.label : undefined}
                aria-label={typeof item.label === 'string' ? item.label : `Item ${i + 1}`}
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.18, delay: i * 0.03 }}
              >
                {item.icon}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB toggle (hamburger) */}
      <button
        type="button"
        aria-label="Open navigation"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-[#0b0b0f] border border-white/10 text-white shadow-md"
      >
        {/* Simple hamburger/close icon (inline SVG) */}
        {!open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </div>
  );
}

/* ------------------------------ Adaptive export ------------------------------ */

export default function Dock(props: DockProps) {
  return (
    <>
      <DesktopDock {...props} />
      <MobileDock {...props} />
    </>
  );
}

export { DockLabel, DockIcon }; 