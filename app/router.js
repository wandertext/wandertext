/* eslint max-nested-callbacks: 0, array-callback-return: 0 */
import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("workbench", function() {
    this.route("texts", function() {
      this.route("new");
      this.route("text", { path: ":slug" }, function() {
        this.route("entries", function() {
          this.route("new");
        });
      });
    });
  });
  this.route("help");
  this.route("about");
  this.route("places");
  this.route("texts");
  this.route("login");
  this.route("view", function() {
    this.route("text", { path: "text/:slug" });
  });
});

export default Router;
