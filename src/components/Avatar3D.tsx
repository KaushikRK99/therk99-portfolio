import AvatarOrbitTags from './AvatarOrbitTags';
import { usePortfolio } from '../hooks/usePortfolio';

export default function Avatar3D() {
  const { profile } = usePortfolio();
  return (
    <div
      className="relative w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] grid place-items-center"
      style={{ ['--orbit-r' as never]: 'clamp(7.5rem, 17vw, 12rem)' }}
    >
      <div className="absolute inset-12 -z-10 rounded-full iris-bg blur-3xl opacity-50 animate-glow" />

      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.22),transparent_60%)]" />

      <AvatarOrbitTags />

      <div className="relative w-[78%] h-[78%] grid place-items-center">
        <img
          src={profile.avatarImage}
          alt={`${profile.name} — ${profile.role} · ${profile.location}`}
          width={500}
          height={500}
          draggable={false}
          onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')}
          className="avatar-idle max-w-full max-h-full object-contain drop-shadow-[0_30px_50px_rgba(139,92,246,0.4)] select-none pointer-events-none"
        />

        <div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/5 h-4 rounded-full bg-violet-900/60 blur-2xl"
          aria-hidden="true"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.1),transparent_45%)]" />
    </div>
  );
}
