"use strict";
const path = require("path");
const appColors = require("./colors.js");

const appEntry = path.join(__dirname, "app");
const relevantFilesGlob = "**/*.{html,js,ts,hbs,gjs,gts}";

const tailwindConfig = {
  content: [path.join(appEntry, relevantFilesGlob)],
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
};

module.exports = tailwindConfig;
