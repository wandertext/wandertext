import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupMirage } from "ember-cli-mirage/test-support";
import { run } from "@ember/runloop";

module("Integration | Component | info-box/text", function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test("it renders", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    const model = run(() =>
      this.owner
        .lookup("service:store")
        .createRecord("text", { name: "Model Name" })
    );

    this.set("model", model);

    await render(hbs`<InfoBox::Text @model={{this.model}}/>`);

    assert.dom().includesText("Model Name");
  });

  test("it converts to markdown when there's a @model.markdownName", async function (assert) {
    const model = run(() =>
      this.owner
        .lookup("service:store")
        .createRecord("text", { markdownName: "_Model Name_" })
    );

    this.set("model", model);

    await render(hbs`<InfoBox::Text @model={{this.model}}/>`);

    const title = this.element.querySelector("em");

    assert.ok(title);

    assert.dom(title).includesText("Model Name");
  });
});
