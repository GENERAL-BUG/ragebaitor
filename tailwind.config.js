/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bad: {
          yellow: '#FFD600',
          purple: '#4B0082',
          green: '#00FF41',
          red: '#FF2020',
          cyan: '#00FFFF',
          orange: '#FF6200',
          magenta: '#FF00FF',
          lime: '#BFFF00',
          beige: '#F5E6C8',
          blue: '#0000FF',
        }
      },
      fontFamily: {
        mono: ['"Courier New"', 'Courier', 'monospace'],
        vt323: ['"VT323"', 'monospace'],
        corporate: ['"Arial Black"', 'Arial', 'sans-serif'],
        body: ['Arial', 'Helvetica', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        verdana: ['Verdana', 'Geneva', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1.2s infinite',
        'hard-shake': 'hard-shake 0.4s ease',
        'marquee': 'marquee-slide 2s linear infinite',
      }
    },
  },
  plugins: [],
}
