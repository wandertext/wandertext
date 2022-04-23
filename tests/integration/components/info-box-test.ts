import { module, test, skip } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | info-box", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<InfoBox />`);

    assert.dom().includesText("");

    // Template block usage:
    await render(hbs`
      <InfoBox>
        template block text
      </InfoBox>
    `);

    assert.dom().includesText("template block text");
  });

  skip("if @linkToRoute is passed, InfoBox::Text is wrapped in a link.");

  test("it includes an InfoBox::Text", async function(assert) {
    await render(hbs`<InfoBox />`);

    assert.dom("[data-test-info-box-text]").exists();
  });
});
