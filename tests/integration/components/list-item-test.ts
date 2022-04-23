import { module, skip, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { MirageTestContext } from "wandertext";
import Store from "@ember-data/store";
import { setupMirage } from "ember-cli-mirage/test-support";

module("Integration | Component | list-item", function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test("it renders with an InfoBox", async function(assert) {
    await render(hbs`<ListItem />`);

    assert.dom("[data-test-info-box]").exists();
  });

  test("it shows the model's name", async function(this: MirageTestContext, assert) {
    this.server.create("text");
    const store = this.owner.lookup("service:store") as Store;
    const text = await store.findRecord("text", 1);
    console.log(text);
    this.set("model", text);

    await render(hbs`<ListItem @model={{this.model}} />`);

    assert.dom("[data-test-info-box]").includesText(text.name);
  });

  skip("it has a map that shows associated places");

  skip("it has a @model argument");
  skip("it has a @linkToRoute argument");
});
