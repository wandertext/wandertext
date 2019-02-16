import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | floating-box", hooks => {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{floating-box}}`);

    assert.equal(this.element.textContent.trim(), "I am FloatingBox");

    // Template block usage:
    await render(hbs`
      <FloatingBox>
        template block text
      </FloatingBox>
    `);

    assert.ok(/template block text/.test(this.element.textContent.trim()));
  });
});
