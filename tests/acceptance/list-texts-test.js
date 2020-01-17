import { describe, it } from "mocha";
import { expect } from "chai";
import { setupApplicationTest } from "ember-mocha";
import { visit, currentURL } from "@ember/test-helpers";

describe("Acceptance | list texts", function() {
  setupApplicationTest();
  // De-miraging.
  // setupMirage(hooks);

  // hooks.beforeEach(function() {
  //   this.server.createList("text", 3);
  // });

  it("can visit /workbench/texts", async function() {
    await visit("/workbench/texts");
    expect(currentURL()).to.equal("/workbench/texts");
  });

  it("includes a “Texts” h2.title", async function() {
    await visit("/workbench/texts");
    expect(document.querySelector("h2.title").textContent).to.equal("Texts");
  });

  it.skip("shows a list of 3 .text-listings", async function() {
    await visit("/workbench/texts");
    expect(document.querySelectorAll(".text-listing").length).to.equal(3);
  });
});
