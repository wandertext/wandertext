import { describe, it } from "mocha";
import { expect } from "chai";
import { visit, currentURL } from "@ember/test-helpers";

describe("Acceptance | see Text details", function() {
  it.skip("can visit /workbench/texts/:id", async function() {
    await visit(`/workbench/texts/${this.text.id}`);
    expect(currentURL()).to.equal(`/workbench/texts/${this.text.id}`);
  });

  it.skip("shows the Text.markdownName in h2.text-name", async function() {
    await visit(`/workbench/texts/${this.text.id}`);
    expect(
      "_" + document.querySelector("h2.text-name").textContent.trim() + "_"
    ).to.equal(this.text.markdownName);
  });
});
