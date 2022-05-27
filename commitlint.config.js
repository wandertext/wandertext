"use strict";

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-case": [0], // Allow capitalization
    "header-full-stop": [0], // Allow sentences
    "subject-case": [0],
    "subject-full-stop": [0],
  },
};
