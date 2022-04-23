import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import { setupMirage } from "ember-cli-mirage/test-support";
import type { MirageTestContext } from "wandertext";

module("Acceptance | texts", function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("visiting /texts", async function (this: MirageTestContext, assert) {
    this.server.createList("text", 10);

    await visit("/texts");

    assert.strictEqual(currentURL(), "/texts");

    assert.dom("li[data-test-list-item]").exists({ count: 10 });
  });
});
