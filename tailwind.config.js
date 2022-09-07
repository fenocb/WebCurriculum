/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        righteous: ["Righteous"],
      },
      colors: {
        Cian: "#5AF6FF",
        Background_one: "#1a1a26",
        Background_two: "#060409",
        PurpleNumbre: "#5E00D6"
      },
    },
  },
  plugins: [],
};
