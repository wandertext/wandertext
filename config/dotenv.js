module.exports = function() {
  return {
    clientAllowedKeys: ["COUCHDB_URL", "COUCHDB_USER", "COUCHDB_PASSWORD", "CLOUDANT_URL", "CLOUDANT_USER", "CLOUDANT_PASSWORD"],
    failOnMissingKey: true
  };
};
