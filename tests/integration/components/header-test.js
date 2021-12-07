import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | header", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    await render(hbs`<Header @title="Test Title" />`);

    assert.dom(this.element).hasTextContaining("Test Title");
  });

  test("it renders with Wandertext icon and title with no attributes set", async function (assert) {
    await render(hbs`<Header />`);

    assert.dom("h1").hasText("Wandertext");
    assert.dom(this.element).hasTextContaining("Wandertext Logo");
  });

  // This should be an acceptance test.
  test.skip("it features a back button");
});
