/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: 'rgb(var(--brand) / <alpha-value>)',
        brandFg: 'rgb(var(--brand-contrast) / <alpha-value>)',
      },
      boxShadow: {
        'brand-glow': '0 0 0 2px rgb(var(--brand) / 0.25), 0 0 40px rgb(var(--brand) / 0.15)',
      },
    },
  },
  plugins: [],
};