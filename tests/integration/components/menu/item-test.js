import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | menu/item", hooks => {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    // Template block usage:
    await render(hbs`
      <Menu::Item>
        template block text
      </Menu::Item>
    `);

    assert.dom().includesText("template block text");
  });
});
