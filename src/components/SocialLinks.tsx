import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';

interface Props {
  variant?: 'pill' | 'icon';
  className?: string;
}

export default function SocialLinks({ variant = 'pill', className = '' }: Props) {
  const { profile } = usePortfolio();
  const s = profile.social;

  const items = [
    { key: 'linkedin', href: s.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { key: 'github', href: s.github, icon: Github, label: 'GitHub' },
    { key: 'email', href: s.email ? `mailto:${s.email}` : '', icon: Mail, label: 'Email' },
    { key: 'whatsapp', href: s.whatsapp, icon: MessageCircle, label: 'WhatsApp' },
    {
      key: 'phone',
      href: s.phone ? `tel:${s.phone.replace(/\s+/g, '')}` : '',
      icon: Phone,
      label: 'Phone',
    },
    { key: 'instagram', href: s.instagram, icon: Instagram, label: 'Instagram' },
  ].filter((i) => i.href && i.href.length > 0);

  if (variant === 'pill') {
    return (
      <div
        className={`inline-flex flex-wrap items-center gap-1 px-2 py-2 rounded-full glass ${className}`}
      >
        {items.map(({ key, href, icon: Icon, label }) => (
          <a
            key={key}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            data-cursor="hover"
            className="group w-9 h-9 inline-flex items-center justify-center rounded-full text-violet-100/80 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {items.map(({ key, href, icon: Icon, label }) => (
        <a
          key={key}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          aria-label={label}
          data-cursor="hover"
          className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-white/10 text-violet-100/80 hover:text-white hover:bg-white/10 hover:border-violet-300/60 transition-all duration-300"
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}
