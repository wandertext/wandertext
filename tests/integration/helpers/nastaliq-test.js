import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Helper | nastaliq", function () {
  setupRenderingTest();

  // Replace this with your real tests.
  it.skip("renders", async function () {
    this.set("inputValue", "1234");

    await render(hbs`{{nastaliq inputValue}}`);

    expect(this.element.textContent.trim()).to.equal("1234");
  });
});
