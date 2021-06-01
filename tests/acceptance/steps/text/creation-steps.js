import steps from "./steps.js";

export default function (assert) {
  return steps(assert).then(
    "I should see a text with the title $title",
    async function (title) {
      title = title.replaceAll(/"/g, "");
      return assert.dom("li.text").hasText(title, this.step);
    }
  );
}
