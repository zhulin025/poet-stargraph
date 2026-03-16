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
    },
  },
  plugins: [],
}
