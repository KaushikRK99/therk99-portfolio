import { useRef, useState, type MouseEvent as RMouseEvent } from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Cloud, CreditCard } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';
import AnimatedHeading from './AnimatedHeading';

const icons = [Code2, Brain, Cloud, CreditCard];

export default function ServicesSection() {
  const { services } = usePortfolio();

  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px hairline" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <span className="eyebrow mb-5 inline-flex">03 — SERVICES</span>
            <AnimatedHeading
              text="What I build."
              as="h2"
              className="apple-text font-black leading-[1.02] tracking-tight text-5xl sm:text-6xl lg:text-7xl"
            />
          </div>
          <p className="max-w-md text-violet-100/70 body-text">
            Four lanes I run regularly — full-stack web, AI integrations, cloud / Firebase platforms, and the payments + automation glue that holds SaaS together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: idx * 0.07 }}
              >
                <SpotlightCard index={idx} Icon={Icon} title={s.title} description={s.description} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SpotlightCard({
  index,
  Icon,
  title,
  description,
}: {
  index: number;
  Icon: typeof Code2;
  title: string;
  description: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const onMove = (e: RMouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className="glass glass-hover-glow relative h-full p-8 sm:p-10 overflow-hidden group"
      data-cursor="hover"
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${pos.x}% ${pos.y}%, rgba(167,139,250,0.18), transparent 40%)`,
        }}
      />

      <div className="relative">
        <div className="flex items-center justify-between mb-7">
          <span className="text-3xl font-black iris-text">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="w-14 h-14 rounded-2xl iris-bg grid place-items-center shadow-iris">
            <Icon size={22} className="text-bg" strokeWidth={2.4} />
          </div>
        </div>

        <h3 className="text-2xl sm:text-3xl font-semibold apple-text tracking-tight">
          {title}
        </h3>
        <p className="body-text mt-3 text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
