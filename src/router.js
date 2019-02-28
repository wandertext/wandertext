/* eslint array-callback-return: 0 */
import EmberRouter from "@ember/routing/router";
import config from "../config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("text", { path: "text/:slug" });
  this.route("texts");
  this.route("places");
  this.route("help");
  this.route("about");
});

export default Router;
