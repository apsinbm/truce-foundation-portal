import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',    // blue-600 (darkened for light theme)
        background: '#ffffff', // white
        card: '#f9fafb',      // gray-50
        safe: '#16a34a',      // green-600 (darkened)
        warning: '#d97706',   // amber-600 (darkened)
        danger: '#dc2626',    // red-600 (darkened)
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        serif: ['Libre Baskerville', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
