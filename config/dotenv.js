module.exports = function() {
  return {
    clientAllowedKeys: [
      "COUCHDB",
      "GITHUB_DEV_CLIENT_ID",
      "GITHUB_PRODUCTION_CLIENT_ID"
    ],
    // Fail build when there is missing any of clientAllowedKeys environment
    // variables.  By default false.
    failOnMissingKey: true
  };
};
