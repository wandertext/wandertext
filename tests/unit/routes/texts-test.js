import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Route | texts", hooks => {
  setupTest(hooks);

  test("it exists", function (assert) {
    const route = this.owner.lookup("route:texts");
    assert.ok(route);
  });
});
