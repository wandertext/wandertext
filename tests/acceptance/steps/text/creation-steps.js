import steps from "./steps";

export default function (assert) {
  return steps(assert).then(
    "I should see a text with the title $title",
    async function (error) {
      error = error.replaceAll(/"/g, "");
      return assert.dom("li.text").hasText(error, this.step);
    }
  );
}
