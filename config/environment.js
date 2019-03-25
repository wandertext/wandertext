"use strict";

module.exports = function(environment) {
  const ENV = {
    modulePrefix: "wandertext",
    environment,
    rootURL: "/",
    locationType: "auto",
    emberPouch: {
      localDb: "wandertext",
      remoteDb: process.env.COUCHDB
    },
    fontawesome: {
      icons: {
        "free-solid-svg-icons": ["info-circle", "map", "database", "home"],
        "free-brands-svg-icons": ["ember"]
      }
    },
    EmberENV: {
      FEATURES: {
        EMBER_NATIVE_DECORATOR_SUPPORT: true,
        EMBER_METAL_TRACKED_PROPERTIES: true,
        EMBER_GLIMMER_ANGLE_BRACKET_NESTED_LOOKUP: true,
        EMBER_GLIMMER_ANGLE_BRACKET_BUILT_INS: true
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === "development") {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === "test") {
    // Testem prefers this...
    ENV.locationType = "none";

    // Keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = "#ember-testing";
    ENV.APP.autoboot = false;
    ENV.emberPouch = {
      localDb: "wandertext",
      remoteDb: process.env.COUCHDB
    };
  }

  if (environment === "production") {
    ENV.emberPouch = {
      localDb: "wandertext",
      remoteDb: process.env.COUCHDB
    };
  }

  return ENV;
};
