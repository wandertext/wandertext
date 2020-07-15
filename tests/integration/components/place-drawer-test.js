import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | place-drawer", function () {
  setupRenderingTest();

  it("renders", async function () {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<PlaceDrawer />`);

    expect(this.element.textContent.trim()).to.equal("");

    // Template block usage:
    await render(hbs`
      <PlaceDrawer>
        template block text
      </PlaceDrawer>
    `);

    expect(this.element.textContent.trim()).to.equal("template block text");
  });
});
