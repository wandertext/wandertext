import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | icon", hooks => {
  setupRenderingTest(hooks);

  test("it renders with no @icon or @role", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Icon />`);

    assert.dom("[data-test-icon-component]").includesText("Entry Icon");
  });
});
