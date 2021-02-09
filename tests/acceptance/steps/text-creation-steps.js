import steps from "./steps";

// step definitions that are shared between features should be moved to the
// tests/acceptance/steps/steps.js file

export default function (assert) {
  return steps(assert).then("I should create a text", async function () {
    const texts = await this.owner.lookup("service:store").findAll("text");
    return assert.deepEqual(texts.length, 1, this.step);
  });
}
