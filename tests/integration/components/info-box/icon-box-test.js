import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | info-box/icon-box", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<InfoBox::IconBox />`);

    assert.dom().includesText("");

    // Template block usage:
    await render(hbs`
      <InfoBox::IconBox>
        template block text
      </InfoBox::IconBox>
    `);

    assert.dom().includesText("template block text");
  });
});
