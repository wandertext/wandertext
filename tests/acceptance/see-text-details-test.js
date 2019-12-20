import { describe, it } from "mocha";
import { expect } from "chai";
import { setupApplicationTest } from "ember-mocha";
import { visit, currentURL } from "@ember/test-helpers";
import { setupMirage } from "ember-cli-mirage/test-support";

describe("Acceptance | see Text details", function() {
  const hooks = setupApplicationTest();
  setupMirage(hooks);

  hooks.beforeEach(function() {
    this.text = this.server.create("text");
  });

  it("can visit /workbench/texts/:id", async function() {
    await visit(`/workbench/texts/${this.text.id}`);
    expect(currentURL()).to.equal(`/workbench/texts/${this.text.id}`);
  });

  it("shows the Text.markdownName in h2.text-name", async function() {
    await visit(`/workbench/texts/${this.text.id}`);
    expect(
      "_" + document.querySelector("h2.text-name").textContent.trim() + "_"
    ).to.equal(this.text.markdownName);
  });
});
