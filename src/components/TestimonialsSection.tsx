import { useState } from 'react';
import { Quote } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';
import type { Testimonial } from '../types/portfolio';
import AnimatedHeading from './AnimatedHeading';

export default function TestimonialsSection() {
  const { testimonials } = usePortfolio();
  if (!testimonials || testimonials.length === 0) return null;

  const track = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="relative py-28 sm:py-36 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px hairline" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora aurora-pink top-1/2 left-1/4 w-[40vw] h-[40vw] opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 mb-12">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <span className="eyebrow mb-5 inline-flex">05 — TESTIMONIALS</span>
            <AnimatedHeading
              text="Words from the team."
              as="h2"
              className="apple-text font-black leading-[1.02] tracking-tight text-5xl sm:text-6xl lg:text-7xl"
            />
          </div>
          <p className="max-w-md text-violet-100/70 body-text">
            Recommendations from the people I've worked with — published in full.
          </p>
        </div>
      </div>

      <div className="marquee-wrapper testimonials-marquee relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex gap-6 w-max px-6 items-stretch">
          {track.map((t, idx) => (
            <Card key={`${t.id}-${idx}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Avatar({
  name,
  image,
  color,
}: {
  name: string;
  image?: string;
  color: string;
}) {
  const [errored, setErrored] = useState(false);
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  if (image && !errored) {
    return (
      <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 ring-1 ring-white/15">
        <img
          src={image}
          alt={name}
          onError={() => setErrored(true)}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
    );
  }

  return (
    <div
      className="relative w-12 h-12 rounded-full grid place-items-center text-bg font-bold shrink-0"
      style={{ background: `linear-gradient(135deg, ${color}, #22D3EE)` }}
    >
      {initials}
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  const paragraphs = t.quote.split('\n\n').filter(Boolean);

  return (
    <article
      className="glass glass-hover-glow w-[420px] sm:w-[520px] shrink-0 p-7 sm:p-8 flex flex-col gap-4 self-stretch"
      style={{ scrollSnapAlign: 'start' }}
      data-cursor="hover"
    >
      <Quote size={26} className="text-cyan-300 shrink-0" />

      <div className="flex-1 space-y-3 body-text text-[13.5px] sm:text-sm leading-relaxed text-gray-100">
        {paragraphs.map((p, i) => (
          <p key={i} className="italic">
            "{p}"
          </p>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-white/10 shrink-0">
        <Avatar name={t.name} image={t.image} color={t.avatarColor} />
        <div className="min-w-0">
          <div className="uppercase text-sm font-semibold tracking-wider text-white truncate">
            {t.name}
          </div>
          <div className="text-xs text-muted truncate">{t.role}</div>
          <div className="text-[10px] tracking-widest iris-text mt-0.5 font-semibold truncate">
            {t.relationship}
          </div>
        </div>
      </div>
    </article>
  );
}
