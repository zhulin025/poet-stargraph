/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dopa-pink": "#FF3366",
        "dopa-yellow": "#FFE800",
        "dopa-green": "#1AD511",
        "dopa-blue": "#4F46E5",
        "dopa-bg": "#F8F9FF",
        "clay-dark": "#1E1B4B",
      },
      boxShadow: {
        'super-clay': '16px 16px 0px 0px #1E1B4B',
        'super-clay-hover': '20px 20px 0px 0px #1E1B4B',
        'inner-clay': 'inset -4px -4px 8px rgba(0, 0, 0, 0.05), inset 4px 4px 8px rgba(255, 255, 255, 1)',
      },
      borderRadius: {
        'clay-xl': '3rem',
      }
    },
  },
  plugins: [],
};
