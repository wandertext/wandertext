import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Route | places/place", function (hooks) {
  setupTest(hooks);

  test("it exists", function (assert) {
    const route = this.owner.lookup("route:places/place");
    assert.ok(route);
  });
});
