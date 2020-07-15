import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | the-map", function () {
  const hooks = setupRenderingTest();

  hooks.beforeEach(async function () {
    await render(hbs`<TheMap />`);
  });

  it("renders as #the-map", async function () {
    expect(this.element.querySelector("#the-map")).to.be.ok;
  });

  it("sets theMap.map");

  it("builds a leaflet map out of theMap.map");
});
