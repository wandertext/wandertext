import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | text-list", function () {
  setupRenderingTest();

  it.skip("renders as #text-list", async function () {
    await render(hbs`<TextList />`);
    expect(this.element.querySelector("#text-list")).to.be.ok;
  });
});
