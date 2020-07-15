import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { render } from "@ember/test-helpers";
import EmberObject from "@ember/object";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | text-listing", function () {
  const hooks = setupRenderingTest();

  hooks.beforeEach(async function () {
    this.text = EmberObject.create({
      name: "Name",
      slug: "slug",
      entrySort: "entrySort"
    });
    await render(hbs`<TextListing @text={{this.text}} />`);
  });

  it.skip("renders as .text-listing", function () {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    expect(this.element.querySelector(".text-listing")).to.be.ok;
  });

  it("shows the name of the text in an h3", function () {
    expect(this.element.querySelector("h3").textContent).to.equal(
      this.text.name
    );
  });

  it("renders markdown with text-title", async function () {
    this.text.markdownName = "_Markdown Name_";

    await render(hbs`<TextListing @text={{this.text}} />`);

    expect(this.element.querySelector("h3")).to.contain.html(
      "<em>Markdown Name</em>"
    );
  });
});
