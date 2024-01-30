import { module, test, skip } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | map", hooks => {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    await render(hbs`<Map />`);

    assert.dom().includesText("");
  });

  test("it draws a map with one marker for every Marker", async function (assert) {
    const markers = [1, 2, 3, 4, 5, 6, 7].map(() => {
      return {
        createdAt: new Date(),
        name: "some name",
        latitude: Math.random() * 140 - 70,
        longitude: Math.random() * 340 - 170,
      };
    });

    const count = markers.length;

    this.set("markers", markers);

    await render(hbs`<Map @markers={{this.markers}} />`);

    assert.dom(".leaflet-marker-icon").exists({ count });
  });

  skip("it is the full window size when @fullScreen is true", async function (assert) {
    await render(hbs`<Map @fullScreen={{true}} />`);

    // if (this.element) {
    //   console.log("there is an element");
    //   // const map = this.element.querySelector("[data-test-map-full-screen]");
    // }

    assert.ok(true);
  });

  skip("it expects a @defaultModalOpen argument");
  skip("it expects a @modalContentComponent argument");

  skip("it auto-opens a modal when @defaultModalOpen is true");
  skip("The modal content component is...");
});
