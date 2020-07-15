import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { render, find } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | floating-box", function () {
  setupRenderingTest();

  it("is called #floating-box", async function () {
    await render(hbs`<FloatingBox />`);
    expect(find("#floating-box")).to.be.ok;
  });

  it("renders as block", async function () {
    await render(hbs`
      <FloatingBox>
        template block text
      </FloatingBox>
    `);
    expect(find("#floating-box")).to.contain.text("template block text");
  });
});
