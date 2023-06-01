/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1025px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lightRed: "hsl(356, 100%, 66%)",
        veryLightRed: "hsl(355, 100%, 74%)",
        veryDarkBlue: "hsl(208, 49%, 24%)",
        grayishBlue: "hsl(240, 2%, 79%)",
        veryGrayishBlue: "hsl(207, 13%, 34%)",
        veryDarkGrayishBlue: "hsl(240, 10%, 16%)",
        veryDarkBlackBlue: "hsl(0, 0%, 98%)",
      },
      gradientColorStops: {
        redGradientStart: "hsl(13, 100%, 72%)",
        redGradientStop: "hsl(353, 100%, 62%)",
        redGradientStart: "hsl(237, 17%, 21%)",
        redGradientStop: "hsl(237, 23%, 32%))",
      },
    },
  },
  plugins: [],
};
