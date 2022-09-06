import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Route | texts/text/entries", function (hooks) {
  setupTest(hooks);

  test("it exists", function (assert) {
    const route = this.owner.lookup("route:texts/text/entries");
    assert.ok(route);
  });
});
