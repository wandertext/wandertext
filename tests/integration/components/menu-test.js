import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | menu", hooks => {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Menu />`);

    assert.equal(this.element.textContent.trim(), "");
  });

  test("it is an <aside>", async function (assert) {
    await render(hbs`<Menu />`);

    assert.dom(this.element.children[0]).hasTagName("aside");
  });

  test("it has a <header> and a <footer>", async function (assert) {
    await render(hbs`<Menu />`);

    assert.dom(this.element.children[0].children[0]).hasTagName("header");
    assert
      .dom(
        this.element.children[0].children[
          this.element.children[0].children.length - 1
        ]
      )
      .hasTagName("footer");
  });
});
