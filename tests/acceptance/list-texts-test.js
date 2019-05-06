import { describe, it } from "mocha";
import { expect } from "chai";
import { setupApplicationTest } from "ember-mocha";
import { authenticateSession } from "ember-simple-auth/test-support";
import { visit, currentURL } from "@ember/test-helpers";

describe("Acceptance | list texts", function() {
  const hooks = setupApplicationTest();

  hooks.beforeEach(async function() {
    authenticateSession();
    this.currentContributor = this.owner.lookup("service:currentContributor");
    this.currentContributor.contributor = {
      username: "github-username",
      id: "contrib-id",
      firstName: "contrib-first",
      lastName: "contrib-last"
    };
    this.store = this.owner.lookup("service:store");
    await [
      {
        name: "Over Sea, Under Stone",
        slug: "osus-1965"
      },
      {
        name: "The Dark Is Rising",
        slug: "tdir-1974"
      }
    ].forEach(text => this.store.createRecord("text", text));
  });

  it("can visit /workbench/texts", async function() {
    await visit("/workbench/texts");
    expect(currentURL()).to.equal("/workbench/texts");
  });

  it.skip("includes a “Texts” h2", async function() {
    await visit("/workbench/texts");
    expect(this.element.querySelector("h2").textContent).to.equal("Texts");
  });

  it.skip("shows a list of 2 .text-listings", async function() {
    await visit("/workbench/texts");
    expect(this.element.querySelectorAll(".text-listing").length).to.equal(2);
  });
});
