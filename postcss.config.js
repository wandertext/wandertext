const env = process.env.EMBER_ENV || "development";

const plugins = [
  // require("postcss-custom-media")({
  //   importFrom: "app/style/media.css",
  // }),
  // require("postcss-simple-vars"),
  require("tailwindcss/nesting"),
  // require("postcss-hexrgba"),
  // require("postcss-easing-gradients"),
  // require("postcss-font-magician"),
  // require("postcss-responsive-type"),
  require("tailwindcss")({ config: "./tailwind/config.js" }),
  require("autoprefixer"),
];

if (env === "production") {
  plugins.push(require("cssnano"));
}

module.exports = {
  plugins,
};
