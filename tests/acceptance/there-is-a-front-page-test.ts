import { module, test } from "qunit";
import { visit } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | there is a front page", function (hooks) {
  setupApplicationTest(hooks);

  test("visiting /", async function (assert) {
    await visit("/");

    assert.dom("h1").includesText("Wandertext");
  });
});
