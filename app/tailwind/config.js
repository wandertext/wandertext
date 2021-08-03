/* eslint unicorn/prefer-module: "off" */
const appColors = require("./colors.js");

const tailwindConfig = {
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
    fontFamily: {
      title: ["Elsie"],
      sans: ['"Noto Sans"', "Arial", "ui-sans-serif"],
      serif: ["Noto Serif", "ui-serif", '"Times New Roman"', "Times", "serif"],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
  },
};

module.exports = tailwindConfig;
