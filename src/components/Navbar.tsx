import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'SERVICES', href: '#services' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-2 sm:top-3 inset-x-2 sm:inset-x-3 mx-auto z-50 max-w-[1100px] rounded-2xl transition-all duration-500 ${
        scrolled || open ? 'glass shadow-glass' : 'bg-transparent'
      }`}
    >
      <nav className="px-3 sm:px-4 xl:px-6 h-14 xl:h-16 flex items-center justify-between gap-2 sm:gap-3 overflow-hidden">
        <a
          href="#home"
          className="flex items-baseline text-base xl:text-lg font-bold tracking-wide shrink-0 whitespace-nowrap"
          data-cursor="hover"
        >
          <span className="apple-text">the</span>
          <span className="iris-text">rk99</span>
        </a>

        <ul className="hidden xl:flex items-center gap-5 text-[11px] font-medium tracking-[0.22em] text-gray-300 min-w-0">
          {links.map((l, i) => (
            <motion.li
              key={l.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}
            >
              <a
                href={l.href}
                className="relative group hover:text-white transition-colors whitespace-nowrap"
                data-cursor="hover"
              >
                {l.label}
                <span className="absolute left-0 right-0 -bottom-1.5 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 iris-bg" />
              </a>
            </motion.li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden xl:inline-flex shrink-0 items-center gap-2 px-4 py-2 rounded-full text-[11px] font-semibold btn-iris tracking-wide whitespace-nowrap"
          data-cursor="hover"
        >
          Let's Talk
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="xl:hidden p-2 -mr-1 text-violet-200 hover:text-white shrink-0"
          onClick={() => setOpen((v) => !v)}
          data-cursor="hover"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden overflow-hidden rounded-b-2xl border-t border-white/5"
          >
            <ul className="flex flex-col px-4 py-4 gap-1 tracking-widest">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-gray-300 hover:text-violet-200 text-xs tracking-[0.24em]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold btn-iris"
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
