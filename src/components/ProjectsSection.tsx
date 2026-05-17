import { useMemo } from 'react';
import { usePortfolio } from '../hooks/usePortfolio';
import ProjectCard from './ProjectCard';
import AnimatedHeading from './AnimatedHeading';

export default function ProjectsSection() {
  const { projects } = usePortfolio();

  const ordered = useMemo(
    () =>
      [...projects].sort((a, b) => Number(b.highlight) - Number(a.highlight)),
    [projects]
  );

  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px hairline" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="aurora aurora-cyan top-1/4 right-0 w-[40vw] h-[40vw]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <span className="eyebrow mb-5 inline-flex">04 — PROJECTS</span>
            <AnimatedHeading
              text="Selected work."
              as="h2"
              className="apple-text font-black leading-[1.02] tracking-tight text-5xl sm:text-6xl lg:text-7xl"
            />
          </div>
          <p className="max-w-md text-violet-100/70 body-text">
            A slice of the products I've built and maintained across e-learning, booking, e-commerce, admin, and workflow domains.
          </p>
        </div>

        <div className="space-y-7">
          {ordered.map((p, idx) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={idx}
              total={ordered.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
