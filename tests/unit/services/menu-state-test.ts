import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Service | menu-state", function (hooks) {
  setupTest(hooks);

  test("it exists", function (assert) {
    const service = this.owner.lookup("service:menu-state");
    assert.ok(service);
  });
});
