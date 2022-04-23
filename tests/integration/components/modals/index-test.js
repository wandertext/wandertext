import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | modals/index", function(hooks) {
  setupRenderingTest(hooks);

  test.skip("it renders", async function(assert) {
    await render(hbs`<Modals::Index />`);

    assert.dom().includesText("");

    // Template block usage:
    await render(hbs`
      <Modals::Index>
        template block text
      </Modals::Index>
    `);

    assert.dom().includesText("template block text");
  });
});
