/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        redo: "#C11C27",
        blackie: "#15230f",
        white: "#FFFFFF",
        ash: "#C3CEB9",
        gray: "#958D90",
      },
    },
  },
  plugins: [],
};
