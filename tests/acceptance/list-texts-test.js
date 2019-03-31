import { describe, it } from "mocha";
import { expect } from "chai";
import { setupApplicationTest } from "ember-mocha";
import { visit, currentURL } from "@ember/test-helpers";

describe("Acceptance | list texts", function() {
  setupApplicationTest();

  it("can visit /texts", async function() {
    await visit("/texts");
    expect(currentURL()).to.equal("/texts");
  });

  it("should include a “Texts” h2", async function() {
    await visit("/texts");
    expect(this.element.querySelector("h2").textContent).to.equal("Texts");
  });

  it("should show a list of .text-listings", async function() {
    await visit("/texts");
    expect(this.element.querySelectorAll(".text-listing").length).to.equal(3);
  });

  it("should include the text-form component", async function() {
    await visit("/texts");
    expect(this.element.querySelector("#text-form")).to.be.ok;
  });
});
