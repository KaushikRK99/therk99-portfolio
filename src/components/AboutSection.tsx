import { motion } from 'framer-motion';
import { usePortfolio } from '../hooks/usePortfolio';
import AnimatedHeading from './AnimatedHeading';

export default function AboutSection() {
  const { profile, skills } = usePortfolio();

  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px hairline" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="aurora aurora-violet top-1/3 -left-32 w-[40vw] h-[40vw] opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-28 h-fit"
          >
            <span className="eyebrow mb-6 inline-flex">01 — ABOUT</span>
            <AnimatedHeading
              text="About Me."
              as="h2"
              className="apple-text font-black leading-[1.02] tracking-tight text-5xl sm:text-6xl lg:text-7xl"
            />
            <p className="body-text mt-6 text-violet-100/70 max-w-md">
              The short version of who I am, what I build, and the stack I reach for.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="glass glass-hover-glow p-8 sm:p-10">
              <p className="body-text text-lg sm:text-xl text-gray-100 leading-relaxed">
                {profile.bio}
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Stat value={profile.yearsOfExperience} label="Years exp" />
                <Stat value="10+" label="Products shipped" />
                <Stat value="20+" label="Integrations" />
                <Stat value="∞" label="Cups of chai" />
              </div>
            </div>

            <div className="mt-10">
              <span className="eyebrow mb-5 inline-flex">TECH I REACH FOR</span>
              <div className="space-y-5 mt-4">
                {skills.categories.map((cat, ci) => (
                  <motion.div
                    key={cat.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: ci * 0.05 }}
                  >
                    <div className="text-sm font-semibold text-violet-100 mb-2.5">
                      {cat.name}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <span key={item} className="tag" data-cursor="hover">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-center backdrop-blur-md transition-colors hover:border-violet-400/40 hover:bg-violet-500/5">
      <div className="text-3xl sm:text-4xl font-black iris-text">{value}</div>
      <div className="mt-1 text-[10px] tracking-[0.22em] text-muted uppercase">
        {label}
      </div>
    </div>
  );
}
