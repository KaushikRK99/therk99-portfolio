import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';
import AnimatedHeading from './AnimatedHeading';

export default function ExperienceSection() {
  const { experience } = usePortfolio();

  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px hairline" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <span className="eyebrow mb-5 inline-flex">02 — EXPERIENCE</span>
            <AnimatedHeading
              text="Where I've shipped."
              as="h2"
              className="apple-text font-black leading-[1.02] tracking-tight text-5xl sm:text-6xl lg:text-7xl"
            />
          </div>
          <p className="max-w-md text-violet-100/70 body-text">
            Six years of full-stack delivery across product companies and service firms — from junior Django work to senior platform ownership.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-3 sm:left-6 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-violet-400/40 to-transparent" />

          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="relative pl-10 sm:pl-16"
              >
                <span className="absolute left-0 sm:left-3 top-7 w-6 h-6 rounded-full iris-bg shadow-iris grid place-items-center">
                  <span className="w-2 h-2 rounded-full bg-bg" />
                </span>

                <div className="glass glass-hover-glow p-7 sm:p-9">
                  <div className="flex items-start justify-between flex-wrap gap-3">
                    <div>
                      <span className="text-xs tracking-[0.32em] text-violet-300/80">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-white">
                        {exp.role}
                      </h3>
                      <div className="mt-1 iris-text font-medium">{exp.company}</div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <span className="font-mono text-[11px] tracking-widest px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-violet-100">
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                        <MapPin size={12} /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="body-text mt-4 text-gray-300">{exp.summary}</p>

                  <ul className="mt-5 space-y-2.5">
                    {exp.highlights.map((h, hIdx) => (
                      <motion.li
                        key={hIdx}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.05 * hIdx }}
                        className="body-text text-sm text-gray-300 leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2.5 before:h-px before:iris-bg"
                      >
                        {h}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
