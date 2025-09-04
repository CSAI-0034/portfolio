/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grid': "linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)"
      },
      backgroundSize: {
        'grid': '24px 24px',
      }
    },
  },
  plugins: [],
};
