import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | text-entry-list", function() {
  setupRenderingTest();

  it("renders as #text-entry-list", async function() {
    await render(hbs`<TextEntryList />`);
    expect(this.element.querySelector("#text-entry-list")).to.be.ok;
  });
});
