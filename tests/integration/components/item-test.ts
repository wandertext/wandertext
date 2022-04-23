import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | item", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    this.set("model", {
      name: "Model name",
    });

    await render(hbs`<Item @model={{this.model}} />`);

    assert.dom().includesText("Model name");
  });

  test("it has an InfoBox", async function (assert) {
    await render(hbs`<Item />`);
    assert.dom("[data-test-info-box]").exists();
  });

  test("it has a map icon in the InfoBox", async function (assert) {
    await render(hbs`<Item />`);
    assert.dom("[data-test-icon-title]").containsText("Map");
  });

  test("it renders markdown if the model has a markdownBlurb", async function (assert) {
    const dataTest = "[data-test-markdown-blurb]";
    const italics = "http://en.wikipedia.org/Italic_type";
    this.set("model", {
      markdownBlurb: `_**This** is in [italics](${italics})_`,
    });
    await render(hbs`<Item @model={{this.model}} />`);
    assert.dom(dataTest).hasText("This is in italics");
    // It renders in italics.
    assert.dom(`${dataTest} div p em`).exists();
    // It renders the bold, too.
    assert.dom(`${dataTest} div p em strong`).exists();
    // And it renders a link.
    assert.dom(`${dataTest} div p em a`).hasAttribute("href", italics);
  });
});
