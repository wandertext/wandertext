import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | list", function(hooks) {
  setupRenderingTest(hooks);

  test.skip("it renders", async function(assert) {
    // Not eager to test this.

    await render(hbs`<List />`);

    assert.dom().includesText("");
  });
});
