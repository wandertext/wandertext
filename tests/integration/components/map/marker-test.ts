import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | map/marker", hooks => {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    await render(hbs`<Map::Marker />`);

    assert.dom().containsText("");

    // Template block usage:
    await render(hbs`
      <Map::Marker>
        template block text
      </Map::Marker>
    `);

    assert.dom().containsText("template block text");
  });
});
