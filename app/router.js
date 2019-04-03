/* eslint array-callback-return: 0 */
import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("texts", function() {
    this.route("new");
    this.route("show", { path: "/:slug" }, function() {
      this.route("entries", { path: "/entries" }, function() {
        this.route("new");
      });
    });
  });
  this.route("places");
  this.route("help");
  this.route("about");
  this.route("browse", function() {
    this.route("text", { path: "text/:slug" });
  });
});

export default Router;
