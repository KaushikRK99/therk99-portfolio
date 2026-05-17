import { useRef, useState, type MouseEvent as RMouseEvent } from 'react';
import { ExternalLink, Star } from 'lucide-react';
import type { Project } from '../types/portfolio';

interface Props {
  project: Project;
  index: number;
  total: number;
}

export default function ProjectCard({ project, index, total }: Props) {
  const stickyTop = 96 + index * 22;
  const ref = useRef<HTMLElement | null>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const onMove = (e: RMouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  return (
    <div className="sticky" style={{ top: `${stickyTop}px` }}>
      <article
        ref={ref}
        onMouseMove={onMove}
        className="glass-strong glass-hover-glow overflow-hidden relative group"
      >
        <div
          className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
          style={{
            background: `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, rgba(167,139,250,0.14), transparent 40%)`,
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-14 relative">
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="text-xs tracking-[0.3em] text-violet-200/70">
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              {project.highlight && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] tracking-widest iris-bg text-bg font-semibold">
                  <Star size={10} fill="currentColor" /> FEATURED
                </span>
              )}
              <span className="font-mono text-[11px] tracking-widest text-violet-200/90 px-2.5 py-1 rounded-full border border-white/10">
                {project.year}
              </span>
            </div>

            <h3 className="apple-text text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.02] tracking-tight">
              {project.title}
            </h3>
            <p className="mt-3 iris-text text-sm tracking-wide font-medium">
              {project.subtitle}
            </p>

            <p className="body-text mt-6 text-gray-300 leading-relaxed max-w-xl">
              {project.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-[0.2em] btn-iris"
                >
                  LIVE PROJECT <ExternalLink size={14} />
                </a>
              )}
              <span className="text-xs tracking-widest text-muted uppercase">
                Role · {project.role}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[260px] grid place-items-center p-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-700/30 via-cyan-500/10 to-pink-500/10" />
            <div className="absolute inset-0 bg-noise opacity-15" />

            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover absolute inset-0"
              />
            ) : (
              <div className="relative text-center">
                <div className="iris-text-shimmer text-[20vw] lg:text-[8vw] font-black leading-none tracking-tighter select-none">
                  {project.title.split(' ')[0]}
                </div>
                <div className="mt-3 text-xs tracking-[0.3em] text-violet-200/80">
                  {project.id.toUpperCase()}
                </div>
                <div className="absolute -inset-12 rounded-full bg-violet-500/20 blur-3xl -z-10" />
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
