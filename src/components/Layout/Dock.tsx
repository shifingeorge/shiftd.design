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

function DockItem({
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

export default function Dock({
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
      className="
        fixed z-50 left-0 right-0
        pointer-events-none
      "
      style={{
        bottom: 'max(1rem, env(safe-area-inset-bottom))',
      }}
      aria-label="Application dock container"
    >
      {/* Mobile: right aligned; md+: centered */}
      <div className="flex justify-end md:justify-center px-4 md:px-0">
        <div
          onMouseMove={(e) => mouseX.set(e.clientX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          onTouchMove={(e) => {
            if (e.touches?.[0]) mouseX.set(e.touches[0].clientX);
          }}
          onTouchEnd={() => mouseX.set(Infinity)}
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
            <DockItem
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
            </DockItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export { DockIcon, DockLabel };