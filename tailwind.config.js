import { BiFontFamily } from "react-icons/bi";

// tailwind.config.js
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rajdhani : ['Sofia Sans Semi Condensed', 'sans-serif'],
        soft : ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
