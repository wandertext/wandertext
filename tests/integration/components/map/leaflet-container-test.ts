import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | map/leaflet-container", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    this.set("lat", 40.712_778);
    this.set("lng", -74.006_111);

    await render(
      hbs`<Map::LeafletContainer @lat={{this.lat}} @lng={{this.lng}} />`
    );

    assert.dom().includesText("Leaflet");

    // Template block usage:
    // await render(hbs`
    //   <Map::LeafletContainer @lat={{this.lat}} @lng={{this.lng}}>
    //     template block text
    //   </Map::LeafletContainer>
    // `);

    // assert.dom().includesText("template block text");
  });
});
