import steps from "./steps";

// step definitions that are shared between features should be moved to the
// tests/acceptance/steps/steps.js file

export default function (assert) {
  return (
    steps(assert)
      .when("I visit the list of texts", () => {
        console.log("in the when");
        // assert.ok(true, this.step);
      })
      // // .when("I press the 'create a text' button", function () {
      // //   assert.ok(true, this.step);
      // // })
      // // .when("I type in 'Moby-Dick' as the title", function () {
      // //   assert.ok(true, this.step);
      // // })
      // // .when("I press the 'Submit' button", function () {
      // //   assert.ok(true, this.step);
      // // })
      .then("I should create a text", function () {
        assert.ok(true, this.step);
      })
  );
}
