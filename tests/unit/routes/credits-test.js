import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Route | credits", function (hooks) {
  setupTest(hooks);

  test("it exists", function (assert) {
    const route = this.owner.lookup("route:credits");
    assert.ok(route);
  });
});
