import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, type MouseEvent, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'iris' | 'ghost';
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'iris',
  className = '',
  strength = 0.3,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 240, damping: 20, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 240, damping: 20, mass: 0.5 });

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    'inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide select-none';
  const skin = variant === 'iris' ? 'btn-iris' : 'btn-ghost';

  const inner = (
    <motion.span style={{ x: sx, y: sy }} className={`${base} ${skin} ${className}`}>
      {children}
    </motion.span>
  );

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-cursor="hover"
      className="inline-block"
    >
      {href ? (
        <a href={href} className="inline-block">
          {inner}
        </a>
      ) : (
        <button type="button" onClick={onClick} className="inline-block">
          {inner}
        </button>
      )}
    </div>
  );
}
