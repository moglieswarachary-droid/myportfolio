/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0C0C0C',
          surface: '#151515',
          elevated: '#1A1A1A',
          border: '#27272A',
        },
        text: {
          primary: '#D7E2EA',
          secondary: '#8B949E',
          muted: '#646973',
          bright: '#F0F6FC',
        },
        accent: {
          amber: '#F59E0B',
          orange: '#FB923C',
          deep: '#D97706',
          glow: 'rgba(245, 158, 11, 0.25)',
        },
        silver: {
          light: '#BBCCD7',
          DEFAULT: '#8B949E',
          dark: '#646973',
        },
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
        space: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'cinema-glow': '0 0 50px -10px rgba(245, 158, 11, 0.35)',
        'cyan-glow': '0 0 50px -10px rgba(6, 182, 212, 0.35)',
        'anamorphic': '0 0 100px rgba(245, 158, 11, 0.15), 0 0 40px rgba(6, 182, 212, 0.2)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'flare': 'flare 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        flare: {
          '0%, 100%': { opacity: 0.4, transform: 'translateX(-20%) scaleX(0.9)' },
          '50%': { opacity: 0.8, transform: 'translateX(20%) scaleX(1.1)' },
        }
      }
    },
  },
  plugins: [],
}
