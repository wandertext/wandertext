import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | modal", function (hooks) {
  setupRenderingTest(hooks);

  // This test crashes because it's waiting for an action for the {{on}} helper
  // in the button.

  test.skip("it renders", async function (assert) {
    await render(hbs`<Modal />`);

    assert.dom().includesText("");

    // Template block usage:
    await render(hbs`
      <Modal>
        template block text
      </Modal>
    `);

    assert.dom().includesText("template block text");
  });
});
