"use strict";

module.exports = function(environment) {
  const ENV = {
    modulePrefix: "wandertext",
    environment,
    rootURL: "/",
    locationType: "auto",
    firestoreOn: true,
    firebase: {
      apiKey: process.env.FIREBASE_APIKEY,
      authDomain: process.env.FIREBASE_AUTHDOMAIN,
      databaseURL: process.env.FIREBASE_DATABASEURL,
      projectId: process.env.FIREBASE_PROJECTID,
      storageBucket: process.env.FIREBASE_STORAGEBUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID
    },
    apollo: {
      apiURL: "http://localhost:4040/graphql"
    },
    apiHost: "http://localhost:4040",
    // ApiHost: "https://api.wandertext.space",
    torii: {
      sessionServiceName: "session",
      providers: {
        "github-oauth2": {
          scope: "repo user"
        }
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
    ENV.torii.providers["github-oauth2"].apiKey =
      process.env.GITHUB_DEV_CLIENT_ID;
    ENV.torii.providers["github-oauth2"].redirectUri =
      process.env.GITHUB_DEV_REDIRECT_URI;
    ENV.torii.providers["github-oauth2"].tokenExchangeUri =
      process.env.DEV_TOKEN_EXCHANGE_URL;
    if (ENV.firestoreOn) {
      ENV["ember-cli-mirage"] = { enabled: false };
    } else {
      ENV["ember-cli-mirage"] = { enabled: true };
    }
  }

  if (environment === "test") {
    // Testem prefers this...
    ENV.locationType = "none";
    ENV.torii.providers["github-oauth2"].apiKey =
      process.env.GITHUB_DEV_CLIENT_ID;
    ENV.torii.providers["github-oauth2"].redirectUri =
      process.env.GITHUB_DEV_REDIRECT_URI;
    ENV.torii.providers["github-oauth2"].tokenExchangeUri =
      process.env.TEST_TOKEN_EXCHANGE_URL;

    // Keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = "#ember-testing";
    ENV.APP.autoboot = false;
    ENV.backendHost = "";
  }

  if (environment === "production") {
    ENV.torii.providers["github-oauth2"].apiKey =
      process.env.GITHUB_PRODUCTION_CLIENT_ID;
    ENV.torii.providers["github-oauth2"].redirectUri =
      process.env.GITHUB_PRODUCTION_REDIRECT_URI;
    ENV.torii.providers["github-oauth2"].tokenExchangeUri =
      process.env.PRODUCTION_TOKEN_EXCHANGE_URL;
    ENV["ember-cli-mirage"] = { enabled: false };
    ENV.firestoreOn = true;
  }

  return ENV;
};
