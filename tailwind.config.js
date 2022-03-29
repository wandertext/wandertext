"use strict";
const path = require("path");

const appEntry = path.join(__dirname, "app");
const relevantFilesGlob = "**/*.{html,js,ts,hbs,gjs,gts}";

const appColors = {
  white: "#ffffff",
  black: "#000000",
  primary: "#012169",
  primaryDark: "#011541",
  columbiaBlue: "#B9D9EB",
  columbiaBlueLight: "#EFF6FB",
  error: "#FE5D26",
  errorLight: "#FFE1D6",
  warning: "#F2C078",
  warningLight: "#F9E5C7",
  gray: "#C4C4C4",
  grayLight: "#F0F0F0",
};

const content = [path.join(appEntry, relevantFilesGlob)];

const tailwindConfig = {
  content,
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      white: "white",
      transparent: "transparent",
      current: "currentColor",
      primary: appColors.primary,
      primaryDark: appColors.primaryDark,
      columbiaBlue: appColors.columbiaBlue,
      columbiaBlueLight: appColors.columbiaBlueLight,
      error: appColors.error,
      errorLight: appColors.errorLight,
      warning: appColors.warning,
      warningLight: appColors.warningLight,
      gray: appColors.gray,
      grayLight: appColors.grayLight,
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
  plugins: [require("@tailwindcss/typography")],
};

module.exports = tailwindConfig;
