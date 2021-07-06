import steps from "wandertext/tests/acceptance/steps/steps";

// step definitions that are shared between features should be moved to the
// tests/acceptance/steps/steps.js file

export default function (assert) {
  return steps(assert).then(
    "I should see a place with the name $place",
    async function (place) {
      return assert.dom("li.place").hasText(place, this.step);
    }
  );
}
