import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Helper | text-title", function() {
  setupRenderingTest();

  it("uses the markdownName first", async function() {
    const markdownName = "Markdown Name";
    this.text = {
      markdownName,
      name: "regular name"
    };

    await render(hbs`{{text-title this.text}}`);

    expect(this.element.textContent.trim()).to.equal(markdownName);
  });

  it("uses the regular name when no markdownName", async function() {
    this.text = {
      markdownName: null,
      name: "regular name"
    };

    await render(hbs`{{text-title this.text}}`);

    expect(this.element.textContent.trim()).to.equal("regular name");
  });

  it.skip("renders markdown in markdown", async function() {
    const markdownName = "_Markdown Name_";
    this.text = {
      markdownName,
      name: "regular name"
    };

    await render(hbs`{{text-title this.text}}`);

    expect(this.element).to.have.html("<em>Markdown Name</em>");
  });
});
