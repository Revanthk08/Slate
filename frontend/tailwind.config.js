/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        heading1: "#959495",
        orange: "#FF7300",
        placeholder: "#4C4C4C",
        common: "#B8B8B8",
        text: "#A7A7A7",
      },

      fontSize: {
        xl: "2.75rem",
        nm: "1rem",
        "nm+": "1.875rem",
        "nm++": "2.5rem",
      },

      fontFamily: {
        Bold: ["Bold", "sans-serif"],
        semiBold: ["semiBold", "sans"],
        reg: ["reg", "sans"],
      },
    },
  },
  plugins: [],
};
