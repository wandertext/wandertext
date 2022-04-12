import { module, test } from "qunit";
import { visit, currentURL, type TestContext } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import { Server } from "miragejs";
import { setupMirage } from "ember-cli-mirage/test-support";

interface MirageTestContext extends TestContext {
  server: Server;
}

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
