import { describe, it } from "mocha";
import { expect } from "chai";
import { setupApplicationTest } from "ember-mocha";
import { visit, currentURL } from "@ember/test-helpers";

describe("Acceptance | see text details", function() {
  const hooks = setupApplicationTest();

  hooks.beforeEach(async function() {
    const store = this.owner.lookup("service:store");
    const texts = await store.findAll("text");
    this.text = texts.firstObject;
    await visit(`/texts/${this.text.slug}`);
  });

  it("can visit /texts/:slug", function() {
    expect(currentURL()).to.equal(`/texts/${this.text.slug}`);
  });

  it("shows the Text.name as h3#text-name", function() {
    expect(
      this.element.querySelector("h3#text-name").textContent.trim()
    ).to.equal(this.text.name);
  });
});
