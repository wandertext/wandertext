import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | inline-editable", function() {
  setupRenderingTest();

  it("renders with a placeholder in case of a lack of a value", async function() {
    await render(hbs`<InlineEditable @placeholder="placeholder" />`);

    expect(this.element).to.contain.text("placeholder");
  });

  it("displays the value", async function() {
    await render(
      hbs`<InlineEditable @value="the-value" @placeholder="placeholder" />`
    );

    expect(this.element).to.contain.text("the-value");
  });
});
