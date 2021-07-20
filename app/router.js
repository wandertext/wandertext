/* eslint prefer-arrow-callback: "off" */
/* eslint array-callback-return: "off" */
import EmberRouter from "@ember/routing/router";
import config from "wandertext/config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("texts");
  this.route("places");
  this.route("contributors");
  this.route("about");
  this.route("help");
  this.route("credits");
  this.route("privacy");
  this.route("login");
});
