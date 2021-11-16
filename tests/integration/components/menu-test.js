import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { run } from "@ember/runloop";

module("Integration | Component | menu", hooks => {
  setupRenderingTest(hooks);

  test("it is an <aside>", async function (assert) {
    const menuState = run(() => this.owner.lookup("service:menuState"));

    menuState.menuVisible = true;

    this.set("menuState", menuState);

    await render(hbs`<Menu />`);

    assert.dom(this.element.children[0]).hasTagName("aside");
  });

  test("it has a <header> and a <footer>", async function (assert) {
    const menuState = run(() => this.owner.lookup("service:menuState"));

    menuState.menuVisible = true;

    this.set("menuState", menuState);

    await render(hbs`<Menu />`);

    assert.dom(this.element.children[0].children[1]).hasTagName("header");
    assert
      .dom(
        this.element.children[0].children[
          this.element.children[0].children.length - 1
        ]
      )
      .hasTagName("footer");
  });
});
