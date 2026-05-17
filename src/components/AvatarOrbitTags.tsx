interface Tag {
  text: string;
  tone: 'violet' | 'cyan' | 'pink';
  dur: number;
  radiusOffset: number;
  size: 'sm' | 'md';
}

const TAGS: Tag[] = [
  { text: '</>',  tone: 'cyan',   dur: 22, radiusOffset: 0,   size: 'md' },
  { text: '{ }',  tone: 'violet', dur: 24, radiusOffset: 12,  size: 'sm' },
  { text: '( )',  tone: 'pink',   dur: 20, radiusOffset: -8,  size: 'sm' },
  { text: '=>',   tone: 'cyan',   dur: 26, radiusOffset: 6,   size: 'md' },
  { text: '#',    tone: 'violet', dur: 23, radiusOffset: -4,  size: 'sm' },
  { text: '[ ]',  tone: 'pink',   dur: 21, radiusOffset: 10,  size: 'sm' },
  { text: 'fn',   tone: 'cyan',   dur: 25, radiusOffset: -10, size: 'md' },
  { text: '*',    tone: 'violet', dur: 19, radiusOffset: 4,   size: 'sm' },
];

export default function AvatarOrbitTags() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {TAGS.map((t, i) => {
        const startAngle = (i / TAGS.length) * 360;
        const delay = -(startAngle / 360) * t.dur;

        return (
          <div
            key={i}
            className="absolute inset-0 grid place-items-center"
            style={{
              animation: `orbit-cw ${t.dur}s linear infinite`,
              animationDelay: `${delay}s`,
            }}
          >
            <div
              className="absolute"
              style={{
                transform: `translateY(calc(var(--orbit-r) + ${t.radiusOffset}px))`,
              }}
            >
              <span
                className={`orbit-pill tone-${t.tone} ${
                  t.size === 'sm' ? 'text-[10px] px-2 py-1' : ''
                }`}
                style={{
                  animation: `orbit-ccw ${t.dur}s linear infinite`,
                  animationDelay: `${delay}s`,
                  display: 'inline-block',
                }}
              >
                {t.text}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
