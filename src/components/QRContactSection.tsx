import { useMemo, useRef, useState, type MouseEvent as RMouseEvent } from 'react';
import { motion } from 'framer-motion';
import QRCode from 'react-qr-code';
import { Download, Mail, Phone, MapPin, ScanLine, Smartphone } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';
import AnimatedHeading from './AnimatedHeading';
import { buildVCard, downloadVCard } from '../lib/vcard';

export default function QRContactSection() {
  const { profile } = usePortfolio();
  const vcard = useMemo(() => buildVCard(profile), [profile]);
  const [downloaded, setDownloaded] = useState(false);

  const cardRef = useRef<HTMLDivElement | null>(null);
  const [spot, setSpot] = useState({ x: 50, y: 50 });
  const onMove = (e: RMouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setSpot({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  };

  const onDownload = () => {
    downloadVCard(profile);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <section id="connect" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px hairline" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora aurora-cyan top-1/4 left-1/2 -translate-x-1/2 w-[50vw] h-[40vw] opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <span className="eyebrow mb-5 inline-flex">06 — QUICK CONNECT</span>
            <AnimatedHeading
              text="Save my contact in one scan."
              as="h2"
              className="apple-text font-black leading-[1.02] tracking-tight text-5xl sm:text-6xl"
            />
            <p className="body-text mt-6 text-violet-100/75 max-w-md text-lg leading-relaxed">
              Point your phone camera at the QR — it opens as a vCard with my name, role, email, phone, WhatsApp, and LinkedIn ready to save in one tap.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
              <InfoLine icon={Mail} label={profile.social.email} />
              <InfoLine icon={Phone} label={profile.social.phone} />
              <InfoLine icon={MapPin} label={profile.location} />
              <InfoLine icon={Smartphone} label="WhatsApp ready" />
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button
                onClick={onDownload}
                data-cursor="hover"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-[0.18em] btn-iris"
              >
                {downloaded ? 'SAVED .VCF' : 'DOWNLOAD VCARD'}
                <Download size={14} />
              </button>
              <a
                href={`mailto:${profile.social.email}`}
                data-cursor="hover"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-[0.18em] btn-ghost"
              >
                EMAIL INSTEAD
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative animate-float-slow group">
              <div className="absolute -inset-6 rounded-[2.2rem] iris-bg blur-3xl opacity-25 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-violet-900/60 blur-2xl rounded-full" />

              <div
                ref={cardRef}
                onMouseMove={onMove}
                data-cursor="hover"
                className="vcard glass-strong relative w-[300px] sm:w-[360px] p-6 sm:p-7 rounded-[2rem] overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-1.5"
                style={{
                  boxShadow:
                    'inset 0 1px 0 rgba(255,255,255,0.16), inset 0 0 0 1px rgba(255,255,255,0.03), 0 40px 100px -30px rgba(0,0,0,0.7), 0 0 60px -10px rgba(139,92,246,0.0)',
                }}
              >
                <div
                  className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(400px circle at ${spot.x}% ${spot.y}%, rgba(167,139,250,0.22), transparent 50%)`,
                  }}
                />

                <div className="relative flex items-center justify-between mb-5">
                  <div>
                    <div className="text-[10px] tracking-[0.3em] text-violet-200/70">
                      VCARD · SCAN ME
                    </div>
                    <div className="mt-1 text-base font-semibold apple-text">
                      {profile.name}
                    </div>
                    <div className="text-[11px] text-cyan-200/80 mt-0.5">
                      {profile.role}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl iris-bg grid place-items-center shadow-iris shrink-0">
                    <ScanLine size={18} className="text-bg" />
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden p-5 bg-white">
                  <div className="absolute inset-0 pointer-events-none">
                    <Corner pos="top-2 left-2" />
                    <Corner pos="top-2 right-2" rotate="rotate-90" />
                    <Corner pos="bottom-2 left-2" rotate="-rotate-90" />
                    <Corner pos="bottom-2 right-2" rotate="rotate-180" />
                  </div>

                  <div className="relative w-full aspect-square">
                    <QRCode
                      value={vcard}
                      size={256}
                      bgColor="#FFFFFF"
                      fgColor="#0A0810"
                      level="M"
                      style={{ width: '100%', height: '100%' }}
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl iris-bg grid place-items-center shadow-iris border-[3px] border-white">
                      <span className="text-bg text-lg font-black">K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .vcard {
          will-change: transform, box-shadow;
        }
        .group:hover .vcard {
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.2),
            inset 0 0 0 1px rgba(255,255,255,0.05),
            0 50px 120px -30px rgba(0,0,0,0.7),
            0 0 80px -10px rgba(139,92,246,0.5),
            0 0 40px -10px rgba(34,211,238,0.35) !important;
        }
      `}</style>
    </section>
  );
}

function InfoLine({
  icon: Icon,
  label,
}: {
  icon: typeof Mail;
  label: string;
}) {
  if (!label) return null;
  return (
    <div className="inline-flex items-center gap-2.5 px-3 py-2.5 rounded-xl glass">
      <Icon size={14} className="text-cyan-300 shrink-0" />
      <span className="text-xs text-violet-100/85 truncate">{label}</span>
    </div>
  );
}

function Corner({ pos, rotate = '' }: { pos: string; rotate?: string }) {
  return (
    <div
      className={`absolute ${pos} ${rotate} w-5 h-5`}
      style={{
        borderTop: '2px solid #8B5CF6',
        borderLeft: '2px solid #8B5CF6',
        borderTopLeftRadius: '6px',
      }}
    />
  );
}
