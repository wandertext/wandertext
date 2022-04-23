import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | list-item", function(hooks) {
  setupRenderingTest(hooks);

  test.skip("it renders", async function(assert) {
    // Not sure what to test here.

    await render(hbs`<ListItem />`);

    assert.dom().includesText("");
  });
});
