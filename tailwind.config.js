/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Minecraft-inspired colors
        'mc-green': '#5EFC03',
        'mc-dirt': '#7B5836',
        'mc-stone': '#8B8B8B',
        'mc-grass': '#41C300',
        'mc-sky': '#5A9FD4',
        'mc-coal': '#464646',
        'mc-iron': '#D8D8D8',
        'mc-gold': '#FFD800',
        'mc-diamond': '#4AEDD9',
      },
      fontFamily: {
        'minecraft': ['Minecraft', 'monospace'],
      },
    },
  },
  plugins: [],
}