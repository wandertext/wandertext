const appColors = require("./colors");

module.exports = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: appColors.black,
      white: appColors.white,
      primary: appColors.primary,
      columbiaBlue: appColors.columbiaBlue,
      error: appColors.error,
      warning: appColors.warning,
      gray: appColors.gray,
    },
  },
};
