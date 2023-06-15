/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#729343",
        hoverColor: "#1D753E",
        bodyColor: "#ece7e1",
      },
      minHeight: {
        H75: "75vh",
      },
    },
  },
  plugins: [],
}
