import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Copy, Check, MapPin, ArrowUpRight, FileDown } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';
import SocialLinks from './SocialLinks';
import MagneticButton from './MagneticButton';
import QRMiniPill from './QRMiniPill';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
];

export default function Footer() {
  const { profile } = usePortfolio();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.social.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <footer id="contact" className="relative bg-ink overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px hairline" />
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora aurora-violet -top-32 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw]" />
        <div className="aurora aurora-cyan bottom-0 right-0 w-[35vw] h-[35vw] opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="eyebrow inline-flex mb-6">— LET'S BUILD —</div>
          <h2 className="iris-text-shimmer text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]">
            Have a project<br />in mind?
          </h2>
          <p className="body-text mt-6 max-w-xl mx-auto text-violet-100/70 text-lg">
            I'm open to senior full-stack roles, product engineering, and AI-integrated SaaS work. Remote-friendly.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton href={`mailto:${profile.social.email}`} variant="iris">
              Start a conversation <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton onClick={() => window.print()} variant="ghost">
              Download Resume <FileDown size={16} />
            </MagneticButton>
          </div>

          {profile.freelance && (
            <div className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[11px] tracking-[0.22em] text-cyan-100/85">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              FREELANCE SLOTS OPEN · {profile.freelance.services.length} SERVICE LANES
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/10">
          <div>
            <div className="text-3xl font-black tracking-tight flex items-baseline">
              <span className="apple-text">the</span>
              <span className="iris-text">rk99</span>
            </div>
            <div className="mt-3 text-sm font-semibold text-white">{profile.name}</div>
            <div className="mt-1 text-sm text-violet-100/70">{profile.specialization}</div>
            <div className="mt-4 inline-flex items-center gap-2 text-xs tracking-widest text-muted">
              <MapPin size={12} /> {profile.location}
            </div>
            <p className="body-text mt-6 text-sm text-gray-400 leading-relaxed max-w-sm">
              Crafting premium SaaS experiences with React, Angular, Node, NestJS, Laravel & Django.
            </p>
          </div>

          <div>
            <div className="eyebrow mb-5">NAVIGATE</div>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    data-cursor="hover"
                    className="group inline-flex items-center gap-1 text-gray-300 hover:text-violet-200 transition-colors"
                  >
                    {l.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-5">REACH OUT</div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${profile.social.email}`}
                  data-cursor="hover"
                  className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-violet-200 transition-colors"
                >
                  <Mail size={16} className="text-cyan-300" />
                  {profile.social.email}
                </a>
                <button
                  onClick={copyEmail}
                  aria-label="Copy email"
                  data-cursor="hover"
                  className="p-1.5 rounded-full border border-white/10 text-violet-200 hover:text-white hover:bg-white/10 transition-all"
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                </button>
              </div>

              {profile.social.phone && (
                <a
                  href={`tel:${profile.social.phone.replace(/\s+/g, '')}`}
                  data-cursor="hover"
                  className="flex items-center gap-2 text-sm text-gray-200 hover:text-violet-200 transition-colors"
                >
                  <Phone size={16} className="text-cyan-300" />
                  {profile.social.phone}
                </a>
              )}

              <div className="pt-3">
                <SocialLinks variant="icon" />
              </div>

              <div className="pt-4">
                <QRMiniPill />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex items-center justify-center">
          <div className="text-xs text-muted tracking-wider">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
