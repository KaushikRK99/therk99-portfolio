/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        display: ['"Space Grotesk"', 'Kanit', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg: '#060509',
        ink: '#0A0810',
        panel: '#0F0C18',
        line: '#1B1730',
        muted: '#8E89B0',
        violet: {
          200: '#D4C7FF',
          300: '#B6A3FF',
          400: '#9C84FF',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#4C1D95',
          900: '#2E1065',
        },
        cyan: {
          200: '#A5F3FC',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        pink: {
          300: '#F9A8D4',
          400: '#F472B6',
          500: '#EC4899',
        },
      },
      backgroundImage: {
        'iris': 'linear-gradient(135deg, #22D3EE 0%, #8B5CF6 50%, #F472B6 100%)',
        'iris-soft':
          'linear-gradient(135deg, rgba(34,211,238,0.25) 0%, rgba(139,92,246,0.25) 50%, rgba(244,114,182,0.25) 100%)',
        'apple-text': 'linear-gradient(180deg, #FFFFFF 0%, #B5B1D6 100%)',
        'noise':
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.18 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' /></svg>\")",
      },
      boxShadow: {
        glass:
          'inset 0 1px 0 rgba(255,255,255,0.14), inset 0 0 0 1px rgba(255,255,255,0.02), 0 20px 60px -20px rgba(124,58,237,0.35)',
        iris:
          '0 10px 40px -12px rgba(139,92,246,0.45), 0 4px 16px -6px rgba(34,211,238,0.25)',
        'iris-lg':
          '0 30px 100px -20px rgba(139,92,246,0.55), 0 10px 40px -10px rgba(34,211,238,0.35)',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        glow: 'glow 4s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.9' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
