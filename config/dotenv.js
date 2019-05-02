module.exports = function() {
  return {
    clientAllowedKeys: [
      "COUCHDB",
      "GITHUB_DEV_REDIRECT_URI",
      "GITHUB_DEV_CLIENT_ID",
      "DEV_TOKEN_EXCHANGE_URL"
    ],
    // Fail build when there is missing any of clientAllowedKeys environment
    // variables.  By default false.
    failOnMissingKey: true
  };
};
