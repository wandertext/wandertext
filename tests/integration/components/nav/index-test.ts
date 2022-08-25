import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | nav", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Nav />`);

    assert.dom().hasText("");

    // Template block usage:
    await render(hbs`
      <Nav>
        template block text
      </Nav>
    `);

    assert.dom().hasText("template block text");
  });
});
