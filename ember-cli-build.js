/* eslint capitalized-comments: "off" */
const EmberApp = require("ember-cli/lib/broccoli/ember-app");
const tailwind = require("tailwindcss");

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    fingerprint: {
      exclude: [
        "images/layers-2x.png",
        "images/layers.png",
        "images/marker-icon-2x.png",
        "images/marker-icon.png",
        "images/marker-shadow.png",
      ],
    },
    postcssOptions: {
      compile: {
        plugins: [
          {
            module: require("postcss-import"),
            options: {
              path: ["node_modules"],
            },
          },
          tailwind("./app/tailwind/config.js"),
          require("postcss-preset-env")({
            stage: 1,
          }),
        ],
      },
    },
  });

  const { Webpack } = require("@embroider/webpack");
  return require("@embroider/compat").compatBuild(app, Webpack, {
    // staticAddonTestSupportTrees: true,
    // staticAddonTrees: true,
    // staticHelpers: true,
    // staticComponents: true,
    // splitAtRoutes: ['route.name'], // can also be a RegExp
    packagerOptions: {
      webpackConfig: {
        resolve: {
          fallback: {
            stream: false,
            crypto: false,
            fs: false,
            path: false,
          },
        },
      },
    },
  });
};
