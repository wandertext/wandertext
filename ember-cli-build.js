const EmberApp = require("ember-cli/lib/broccoli/ember-app");
const autoprefixer = require("autoprefixer");
const tailwind = require("tailwindcss");

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here

    postcssOptions: {
      compile: {
        // Enabled: true,
        // cacheInclude: [/.*\.(css|scss)$/, /.tailwind\.js$/],
        plugins: [
          {
            module: require("postcss-import"),
            options: {
              path: ["node_modules"],
            },
          },
          tailwind("./app/tailwind/config.js"),
          autoprefixer,
          require("postcss-preset-env")({
            stage: 1,
          }),
        ],
      },
      // Filter: {
      //   enabled: true,
      //   include: ['styles/*.css'],
      // },
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
