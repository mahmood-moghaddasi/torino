/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#28A745",
        "secondary-color": "#10411B",
        "text-color": "#282828",
        "complementry-color": "#009ECA",
      },
    },
  },
  plugins: [],
};
