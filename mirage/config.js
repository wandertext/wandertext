// import {
//   discoverEmberDataModels,
//   // applyEmberDataSerializers,
// } from "ember-cli-mirage";
// import { createServer } from "miragejs";

export default function (/*config*/) {
  //   let finalConfig = {
  //     ...config,
  //     // Remove discoverEmberDataModels if you do not want ember-cli-mirage to auto discover the ember models
  //     models: { ...discoverEmberDataModels(), ...config.models },
  //     // uncomment to opt into ember-cli-mirage to auto discover ember serializers
  //     // serializers: applyEmberDataSerializers(config.serializers),
  //     routes,
  //   };

  // These will go in the routes function in the future.
  this.namespace = "/api";
  this.resource("contributors");
  this.resource("entry-properties");
  this.resource("entries");
  this.resource("flags");
  this.resource("places");
  this.resource("texts");

  //   return createServer(finalConfig);
}

// function routes() {
// }
