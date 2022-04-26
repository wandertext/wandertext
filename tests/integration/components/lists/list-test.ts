import { module, test, skip } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupMirage } from "ember-cli-mirage/test-support";
import Store from "@ember-data/store";
import { MirageTestContext } from "wandertext";

module("Integration | Component | lists/list", function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test("it renders", async function (assert) {
    await render(hbs`<Lists::List />`);

    assert.dom().includesText("");
  });

  test("it lists texts", async function (this: MirageTestContext, assert) {
    this.server.createList("text", 5);
    const store = this.owner.lookup("service:store") as Store;
    this.set("model", await store.findAll("text"));

    await render(hbs`<Lists::List @model={{this.model}} />`);

    assert.dom("[data-test-list-item]").exists({ count: 5 });
  });

  // Could be an acceptance test?
  skip("it changes how it looks depending on the route");
});
