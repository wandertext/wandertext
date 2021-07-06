import steps from "wandertext/tests/acceptance/steps/entry/steps";

// step definitions that are shared between features should be moved to the
// tests/acceptance/steps/steps.js file

export default function (assert) {
  return steps(assert)
    .then("I should find a file", function () {
      assert.ok(true, this.step);
    })
    .given(
      "the entry with the id $id belongs to the place named $name",
      async function (id, name) {
        const store = this.owner.lookup("service:store");
        const entry = await store.findRecord("entry", id);
        const place = await store.query("place", {
          filter: {
            name,
          },
        });
        entry.place = place;
        entry.save();

        return assert.ok(true, this.step);
      }
    );
}
