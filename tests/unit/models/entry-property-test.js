import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Model | entry property", function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test("it exists", function (assert) {
    const store = this.owner.lookup("service:store");
    const model = store.createRecord("entry-property", {});
    assert.ok(model);
  });
});