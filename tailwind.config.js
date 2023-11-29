/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "src/**/*.jsx"],
  theme: {
    fontFamily: {
      sans: ["Karla", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
