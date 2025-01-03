/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#28A745",
        "primary-dark-color": "#10411B",
        "secondary-color": "#10411B",
        "text-color": "#282828",
        "complementry-color": "#009ECA",
        // "primary-gradiant": "linear-gradient(180deg, #28A745 0%, #10411B 100%)",
      },
      fontFamily: {
        iranSans: "iranSans",
        yekan: "yekan",
        vazir: "vazir",
      },
    },
  },
  plugins: [],
};
