/*
 * Run your test suite* with ember test --server.
 * Navigate to your tests (default: http://localhost:7357/)
 * Run deprecationWorkflow.flushDeprecations() from your browsers console.
 * Copy the string output into config/deprecation-workflow.js in your project.
 */
self.deprecationWorkflow = self.deprecationWorkflow || {};
self.deprecationWorkflow.config = {
  workflow: [{ handler: "silence", matchId: "deprecate-router-events" }]
};
// Handler option: "throw" instead of "silence"
