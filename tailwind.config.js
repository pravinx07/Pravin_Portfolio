/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8b5cf6',
          hover: '#7c3aed',
        },
        secondary: {
          DEFAULT: '#d946ef',
        },
        dark: {
          DEFAULT: '#030712',
          surface: '#0f172a',
          lighter: '#1e293b',
        }
      },
      fontFamily: {
        main: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 10s infinite alternate',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.1) translate(20px, 20px)' },
        }
      }
    },
  },
  plugins: [],
}
