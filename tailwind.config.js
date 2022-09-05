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
        Background_one: "#030022",
        Background_two: "#320967",
        PurpleNumbre: "#5E00D6"
      },
    },
  },
  plugins: [],
};
