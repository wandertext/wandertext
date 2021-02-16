import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Route | places", hooks => {
  setupTest(hooks);

  test("it exists", function (assert) {
    const route = this.owner.lookup("route:places");
    assert.ok(route);
  });
});
