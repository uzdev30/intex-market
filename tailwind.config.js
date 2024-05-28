/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        mainBg: "#F8F8F8",
        darkBg: "#009398",
        yellowBg: "#FFE500",
        redBg: "#ED2020",
        grayBg: "#E2EFEF",
        greenBg: "#139D4B ",
      },
      backgroundImage: {
        vertika:
          " linear-gradient(to bottom right,transparent calc(50% - 1px),red,transparent calc(50% + 1px))",
      },

      colors: {
        mainColor: "#fff",
        darkColor: "#009398",
      },

      boxShadow: {
        shadow: " 20px 0 25px 0 rgba(0, 0, 0, 0.25)",
        shadow1: " 20px 10px 25px 10px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
