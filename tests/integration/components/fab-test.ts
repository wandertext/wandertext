import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { click, render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import MenuState from "wandertext/services/menu-state";

module("Integration | Component | fab", hooks => {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Fab @icon="text" />`);

    assert.dom().includesText("Text Icon");
  });

  test("it renders the menu button when no @icon is defined", async function (assert) {
    await render(hbs`<Fab />`);

    assert.dom().includesText("Menu Icon");
  });

  test("it shows the menu when clicked with the menu icon", async function (assert) {
    const menuState = this.owner.lookup("service:menuState") as MenuState;
    assert.false(menuState.menuVisible);
    await render(hbs`<Fab />`);

    assert.dom().includesText("Menu Icon");
    await click("button");

    assert.true(menuState.menuVisible);
  });
});
