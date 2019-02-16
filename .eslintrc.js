module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  plugins: [
    "ember"
  ],
  extends: [
    "eslint:recommended",
    "plugin:ember/recommended"
  ]
};
