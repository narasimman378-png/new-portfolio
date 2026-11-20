/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { bone: '#EDE8DF', sand: '#DDD6C8', ink: '#111111', accent: '#FF4D1F', mist: '#6B665F' },
      fontFamily: { display: ['"Bricolage Grotesque"', 'sans-serif'], sans: ['Inter', 'sans-serif'] },
      keyframes: { spin2: { to: { transform: 'rotate(360deg)' } } },
      animation: { 'spin-slow': 'spin2 14s linear infinite' },
    },
  },
  plugins: [],
}
