/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        display: ['Syne', 'sans-serif'],
      },
      colors: {
        accent: '#00ff9d',
        'accent-blue': '#38bdf8',
        'cyber-dark': '#020812',
      },
    },
  },
  plugins: [],
};