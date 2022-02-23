/* eslint prefer-arrow-callback: "off" */
/* eslint array-callback-return: "off" */
/* eslint @typescript-eslint/naming-convention: "off" */
import EmberRouter from "@ember/routing/router";
import config from "wandertext/config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("texts", function () {
    this.route("text", { path: "/:text_id" });
  });
  this.route("places");
  this.route("places.place", { path: "/places/:place_id" });
  this.route("contributors");
  this.route("contributors.contributor", {
    path: "/contributors/:contributor_id",
  });
  this.route("about");
  this.route("help");
  this.route("credits");
  this.route("privacy");
  this.route("login");
});
