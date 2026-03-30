/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        blood: '#dc2626',
        shadow: '#09090b',
        graphite: '#18181b',
      },
      fontFamily: {
        mono: ['"Share Tech Mono"', 'monospace'],
        display: ['"Syncopate"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}