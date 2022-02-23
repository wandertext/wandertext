module.exports = {
  prettier: true,
  parser: "@babel/eslint-parser",
  extends: ["plugin:@typescript-eslint/recommended"],
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      legacyDecorators: true,
    },
    babelOptions: {
      plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
    },
  },
  overrides: [
    {
      files: ["app/routes/**/*.ts", "app/models/*.ts"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      files: ["types/**/*.d.ts"],
      rules: {
        "@typescript-eslint/consistent-indexed-object-style": "off",
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
    {
      files: ["tests/**/*.js"],
      rules: {
        "prefer-arrow-callback": "off",
      },
    },
    {
      files: ["tests/*/steps/*/*.js", "tests/*/steps/*.js"],
      rules: {
        "@typescript-eslint/no-empty-function": "off",
      },
    },
    {
      files: ["mirage/**/*.js"],
      rules: {
        "import/no-anonymous-default-export": "off",
      },
    },
    {
      files: [
        "app/tailwind/config.js",
        "ember-cli-build.js",
        "config/*.js",
        "testem.js",
      ],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "unicorn/prefer-module": "off",
      },
    },
  ],
};
