import { lazy, Suspense, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MapPin, Sparkles, ArrowRight, MousePointer2, FileDown } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';
import SocialLinks from './SocialLinks';
import MagneticButton from './MagneticButton';
import AnimatedHeading from './AnimatedHeading';
import Avatar3D from './Avatar3D';

const Hero3DScene = lazy(() => import('./Hero3DScene'));

export default function HeroSection() {
  const { profile } = usePortfolio();
  const sectionRef = useRef<HTMLElement | null>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 18 });
  const py = useSpring(my, { stiffness: 60, damping: 18 });
  const layerSlow = useTransform([px, py], ([x, y]) => `translate3d(${(x as number) * -0.012}px, ${(y as number) * -0.012}px, 0)`);
  const layerMed = useTransform([px, py], ([x, y]) => `translate3d(${(x as number) * 0.018}px, ${(y as number) * 0.018}px, 0)`);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = sectionRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      mx.set(e.clientX - (r.left + r.width / 2));
      my.set(e.clientY - (r.top + r.height / 2));
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [mx, my]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden pt-28 pb-12"
    >
      <Suspense fallback={null}>
        <Hero3DScene />
      </Suspense>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          style={{ transform: layerSlow }}
          className="aurora aurora-violet top-[12%] left-[8%] w-[42vw] h-[42vw]"
        />
        <motion.div
          style={{ transform: layerMed }}
          className="aurora aurora-cyan bottom-[8%] right-[6%] w-[38vw] h-[38vw]"
        />
        <div className="aurora aurora-pink top-[40%] left-[42%] w-[32vw] h-[32vw] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/30 via-transparent to-bg" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 pt-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center flex-wrap gap-2 px-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass">
              <Sparkles size={14} className="text-cyan-300" />
              <span className="text-[11px] tracking-[0.3em] text-violet-100/80 whitespace-nowrap">
                SENIOR FULL STACK · {profile.yearsOfExperience} YEARS
              </span>
            </div>
            {profile.availableForFreelance && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                </span>
                <span className="text-[11px] tracking-[0.3em] text-cyan-100/90 whitespace-nowrap">
                  AVAILABLE FOR FREELANCE
                </span>
              </div>
            )}
          </motion.div>

          <div className="relative grid place-items-center text-center">
            <AnimatedHeading
              text={`Hi, I'm ${profile.shortName}`}
              as="h1"
              className="apple-text font-black leading-[0.9] tracking-tight"
              stagger={0.08}
              delay={0.15}
            />
            <style>{`
              #home h1 {
                font-size: clamp(3rem, 13vw, 14rem);
                white-space: nowrap;
                filter: drop-shadow(0 8px 50px rgba(139,92,246,0.25));
              }
            `}</style>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center -mt-6 sm:-mt-10 md:-mt-12 relative z-20"
          >
            <Avatar3D />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="body-text mx-auto max-w-2xl text-center text-base sm:text-lg text-violet-100/80 leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <span className="tag">
              <MapPin size={12} /> {profile.location}
            </span>
            <span className="tag">{profile.specialization}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex items-center justify-center gap-4"
          >
            <SocialLinks variant="pill" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-2"
          >
            <MagneticButton href="#projects" variant="iris">
              View Projects <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton onClick={() => window.print()} variant="ghost">
              Download Resume <FileDown size={16} />
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="hidden md:flex absolute bottom-6 right-6 lg:right-10 flex-col items-center gap-2 text-violet-200/70"
          >
            <MousePointer2 size={14} className="animate-bounce" />
            <span className="text-[10px] tracking-[0.4em]">SCROLL</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
