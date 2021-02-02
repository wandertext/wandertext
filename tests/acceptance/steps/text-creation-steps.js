import steps from "./steps";

// step definitions that are shared between features should be moved to the
// tests/acceptance/steps/steps.js file

export default function (assert) {
  return steps(assert).then("I should create a text", function () {
    return assert.ok(true, this.step);
  });
}
