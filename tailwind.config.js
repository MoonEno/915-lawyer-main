/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'section-a': "url('../public/images/section-a.webp')",
        'section-b': "url('../public/images/section-b.webp')",
        'section-c': "url('../public/images/section-c.webp')",
        'section-d': "url('../public/images/section-d.webp')",
        'section-e': "url('../public/images/section-e.webp')"
      }
    },
  },
  plugins: [],
}
