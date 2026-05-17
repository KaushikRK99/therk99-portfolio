import type { Profile } from '../types/portfolio';

export function buildVCard(p: Profile): string {
  const [first, ...rest] = p.name.split(' ');
  const last = rest.join(' ');
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${last};${first};;;`,
    `FN:${p.name}`,
    `TITLE:${p.role}`,
    p.social.email && `EMAIL;TYPE=INTERNET:${p.social.email}`,
    p.social.phone && `TEL;TYPE=CELL:${p.social.phone.replace(/\s+/g, '')}`,
    p.social.linkedin && `URL;type=LinkedIn:${p.social.linkedin}`,
    p.social.whatsapp && `URL;type=WhatsApp:${p.social.whatsapp}`,
    p.social.website && `URL:${p.social.website}`,
    p.location && `ADR;TYPE=WORK:;;${p.location};;;;`,
    `NOTE:${p.specialization} — ${p.yearsOfExperience} years experience`,
    'END:VCARD',
  ].filter(Boolean) as string[];
  return lines.join('\n');
}

export function downloadVCard(profile: Profile): void {
  const vcard = buildVCard(profile);
  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${profile.name.replace(/\s+/g, '_')}.vcf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
