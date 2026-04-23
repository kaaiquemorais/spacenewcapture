/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        neon: {
          green: '#00ff88',
          mid:   '#00cc6a',
          dark:  '#009950',
        },
      },
      keyframes: {
        logoGlow: {
          '0%,100%': { filter: 'drop-shadow(0 0 14px rgba(0,255,136,0.7))' },
          '50%':     { filter: 'drop-shadow(0 0 30px rgba(0,255,136,1)) drop-shadow(0 0 60px rgba(0,255,136,0.35))' },
        },
        pulseRing: {
          '0%,100%': { boxShadow: '0 0 14px rgba(0,255,136,0.45)' },
          '50%':     { boxShadow: '0 0 28px rgba(0,255,136,0.45), 0 0 56px rgba(0,255,136,0.15)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0.2' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        scanline: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      animation: {
        logoGlow:  'logoGlow 3s ease-in-out infinite',
        pulseRing: 'pulseRing 2.5s ease-in-out infinite',
        blink:     'blink 1.6s ease-in-out infinite',
        fadeUp:    'fadeUp 0.8s ease-out forwards',
        scanline:  'scanline 6s linear infinite',
      },
    },
  },
  plugins: [],
};
