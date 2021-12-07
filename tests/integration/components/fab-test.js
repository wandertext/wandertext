import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { click, render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { getOwner } from "@ember/application";

module("Integration | Component | fab", hooks => {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Fab @icon="text" />`);

    assert.dom(this.element).hasTextContaining("Text Icon");
  });

  test("it renders the menu button when no @icon is defined", async function (assert) {
    await render(hbs`<Fab />`);

    assert.dom(this.element).hasTextContaining("Menu Icon");
  });

  test("it shows the menu when clicked with the menu icon", async function (assert) {
    const owner = getOwner(this);
    const menuState = owner.lookup("service:menuState");
    assert.false(menuState.menuVisible);
    await render(hbs`<Fab />`);

    assert.dom(this.element).hasTextContaining("Menu Icon");
    await click("button");

    assert.true(menuState.menuVisible);
  });
});
