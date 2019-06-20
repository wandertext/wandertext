import { describe, it } from "mocha";
import { expect } from "chai";
import { setupApplicationTest } from "ember-mocha";
import { authenticateSession } from "ember-simple-auth/test-support";
import { visit, currentURL } from "@ember/test-helpers";
import { setupMirage } from "ember-cli-mirage/test-support";
import faker from "faker";

describe("Acceptance | see Text details", function() {
  const hooks = setupApplicationTest();
  setupMirage(hooks);

  hooks.beforeEach(async function() {
    authenticateSession();
    this.currentContributor = this.owner.lookup("service:currentContributor");
    this.currentContributor.contributor = {
      username: "github-username",
      id: "contrib-id",
      firstName: "contrib-first",
      lastName: "contrib-last"
    };
    this.text = this.server.create("text");
    this.attestedNames = [faker.address.city(), faker.address.city()];
    this.attestedNames.forEach(attestedName => {
      this.server.create("entry", { text: this.text, attestedName });
    });
    await visit(`/workbench/texts/${this.text.id}`);
  });

  it("can visit /workbench/texts/:id", function() {
    expect(currentURL()).to.equal(`/workbench/texts/${this.text.id}`);
  });

  it.skip("shows the Text.name as h3#text-name", function() {
    expect(
      this.element.querySelector("h3#text-name").textContent.trim()
    ).to.equal(this.text.name);
  });
});
