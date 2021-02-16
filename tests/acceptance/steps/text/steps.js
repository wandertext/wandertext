import steps from "../steps";

export default function (assert) {
  return steps(assert)
    .given("no text entitled $title exists", async function (title) {
      title = title.replaceAll(/"/g, "");
      const texts = await this.owner.lookup("service:store").query("text", {
        filter: {
          title,
        },
      });
      return assert.deepEqual(texts.length, 0, this.step);
    })
    .given("a text entitled $title exists", async function (title) {
      title = title.replaceAll(/"/g, "");
      // create a text so that the given condition is met
      await this.server.create("text", { title });
      const texts = await this.owner.lookup("service:store").query("text", {
        filter: {
          title,
        },
      });
      return assert.deepEqual(texts.length, 1, this.step);
    });
}
