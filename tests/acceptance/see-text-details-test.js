import { describe, it } from "mocha";
import { expect } from "chai";
import { setupApplicationTest } from "ember-mocha";
import { authenticateSession } from "ember-simple-auth/test-support";
import { pauseTest, resumeTest, visit, currentURL } from "@ember/test-helpers";
import faker from "faker";

describe("Acceptance | see Text details", function() {
  const hooks = setupApplicationTest();

  hooks.beforeEach(async function() {
    authenticateSession();
    pauseTest();
    const store = this.owner.lookup("service:store");
    const texts = await store.findAll("text");
    this.text = texts.firstObject;
    this.attestedNames = [faker.address.city(), faker.address.city()];
    this.attestedNames.forEach(async attestedName => {
      const entry = store.createRecord("entry", { attestedName });
      this.text.entries.pushObject(entry);
      return entry.save();
    });
    await this.text.save();
    resumeTest();
    await visit(`/workbench/texts/${this.text.slug}`);
  });

  it("can visit /workbench/texts/:slug", function() {
    expect(currentURL()).to.equal(`/workbench/texts/${this.text.slug}`);
  });

  it("shows the Text.name as h3#text-name", function() {
    expect(
      this.element.querySelector("h3#text-name").textContent.trim()
    ).to.equal(this.text.name);
  });
});
