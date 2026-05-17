import { useMemo, useState } from 'react';
import QRCode from 'react-qr-code';
import { ScanLine, Download, Check } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';
import { buildVCard, downloadVCard } from '../lib/vcard';

export default function QRMiniPill() {
  const { profile } = usePortfolio();
  const vcard = useMemo(() => buildVCard(profile), [profile]);
  const [saved, setSaved] = useState(false);

  const onDownload = () => {
    downloadVCard(profile);
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  };

  return (
    <div
      className="group relative inline-flex items-center gap-3 p-2 pr-4 rounded-2xl glass glass-hover-glow"
      data-cursor="hover"
    >
      <div className="relative w-[60px] h-[60px] rounded-xl bg-white p-1.5 shrink-0">
        <QRCode
          value={vcard}
          size={64}
          bgColor="#FFFFFF"
          fgColor="#0A0810"
          level="L"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-violet-400/30" />
      </div>

      <div className="flex flex-col">
        <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.22em] text-violet-200/80">
          <ScanLine size={11} className="text-cyan-300" />
          SCAN TO SAVE
        </span>
        <span className="apple-text text-sm font-semibold leading-tight mt-0.5">
          vCard contact
        </span>
        <button
          onClick={onDownload}
          aria-label="Download vCard"
          className="mt-1.5 inline-flex items-center gap-1 text-[10px] tracking-[0.18em] iris-text font-semibold hover:opacity-80 transition-opacity"
          data-cursor="hover"
        >
          {saved ? (
            <>
              SAVED <Check size={10} />
            </>
          ) : (
            <>
              DOWNLOAD .VCF <Download size={10} />
            </>
          )}
        </button>
      </div>

      <div className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)] animate-pulse" />
    </div>
  );
}
