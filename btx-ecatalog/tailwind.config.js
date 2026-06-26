/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // BTX Pantone-inspired premium purple palette
        brand: {
          50: '#f6f3fb',
          100: '#ede6f7',
          200: '#dccaee',
          300: '#c3a4e0',
          400: '#a576cf',
          500: '#8a4fbc',
          600: '#7437a3', // primary BTX purple
          700: '#5f2b86',
          800: '#4f2670',
          900: '#42235c',
          950: '#2a103f',
        },
        ink: {
          DEFAULT: '#1c1722',
          soft: '#4a4456',
        },
      },
      spacing: {
        4.5: '1.125rem',
        18: '4.5rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 40px -12px rgba(95, 43, 134, 0.18)',
        'card-hover': '0 24px 60px -18px rgba(95, 43, 134, 0.35)',
        glow: '0 0 0 1px rgba(116, 55, 163, 0.12)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #7437a3 0%, #4f2670 100%)',
        'brand-radial':
          'radial-gradient(1200px 600px at 20% -10%, rgba(116,55,163,0.18), transparent 60%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
