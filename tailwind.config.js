/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
          '100%': {
            'background-position': '0% 50%'
          }
        },
        blob: {
          '0%': {
            transform: 'scale(1) translate(0px, 0px)'
          },
          '33%': {
            transform: 'scale(1.2) translate(40px, -60px)'
          },
          '66%': {
            transform: 'scale(0.8) translate(-20px, 20px)'
          },
          '100%': {
            transform: 'scale(1) translate(0px, 0px)'
          }
        }
      }
    },
  },
  plugins: [],
}
