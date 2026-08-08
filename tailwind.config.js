/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22d3ee',
          hover: '#06b6d4',
        },
        secondary: {
          DEFAULT: '#818cf8',
        },
        dark: {
          DEFAULT: '#040d17',
          surface: '#071220',
          lighter: '#0c1e33',
        }
      },
      fontFamily: {
        main: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 12s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'scale(1) translate(0, 0)' },
          '33%':  { transform: 'scale(1.05) translate(15px, -10px)' },
          '66%':  { transform: 'scale(0.95) translate(-10px, 15px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
