/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#2ba37b',
        'hero-start': '#f2fcda',
        'hero-end': '#e2fbec',
        'error-border': '#ff4444',
        'error-bg': '#fff5f5',
      },
      fontFamily: {
        'zalando': ['Zalando Sans SemiExpanded', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 1.5s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
}
