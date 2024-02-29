/** @type {import('tailwindcss').Config} */
import customColors from "./src/customColors";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        ...customColors,
        lightText: "pink",
        boxBg: "linear-gradient(145deg,  #bee6ff,#add8e6)",
        linkedinColor: "#0270AD",
        mailColor: "#F14336",
        githubColor: "black",
        designColor: "#58B907",
      },
      scale: {
        120: "1.2",
        105: "1.05",
      },

      boxShadow: {
        shadowOne: "2px 2px 5px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
