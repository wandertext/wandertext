import steps from "wandertext/tests/acceptance/steps/steps";

export default function (assert) {
  return steps(assert).given(
    "no text entitled $title exists",
    async function (title) {
      title = title.replaceAll(/"/g, "");
      const texts = await this.owner.lookup("service:store").query("text", {
        filter: {
          title,
        },
      });
      return assert.deepEqual(texts.length, 0, this.step);
    }
  );
}
