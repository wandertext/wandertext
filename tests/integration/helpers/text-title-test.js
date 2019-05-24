import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

describe.only("Integration | Helper | text-title", function() {
  setupRenderingTest();

  // Replace this with your real tests.
  it("renders", async function() {
    this.set("inputValue", "1234");

    await render(hbs`{{text-title inputValue}}`);

    expect(this.element.textContent.trim()).to.equal("1234");
  });

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

  it("renders markdown in markdown", async function() {
    const markdownName = "_Markdown Name_";
    this.text = {
      markdownName,
      name: "regular name"
    };

    await render(hbs`{{text-title this.text}}`);

    expect(this.element.textContent.trim()).to.equal("<em>Markdown Name</em>");
  });
});
