import { describe, it } from "mocha";
import { expect } from "chai";
import { setupApplicationTest } from "ember-mocha";
import { visit, click, fillIn } from "@ember/test-helpers";
import { authenticateSession } from "ember-simple-auth/test-support";
import { setupMirage } from "ember-cli-mirage/test-support";
import faker from "faker";

describe("Acceptance | create new Entry", function() {
  const hooks = setupApplicationTest();
  setupMirage(hooks);

  hooks.beforeEach(async function() {
    authenticateSession();
    this.store = this.owner.lookup("service:store");
    this.currentContributor = this.owner.lookup("service:currentContributor");
    this.currentContributor.contributor = {
      username: "github-username",
      id: "contrib-id",
      firstName: "contrib-first",
      lastName: "contrib-last"
    };
    this.text = await this.server.create("text");
    // Create two dummy entries ahead of time.
    this.server.createList("entry", 2, { text: this.text });
    await visit(`/workbench/texts/${this.text.slug}/entries/new`);
  });

  it("fills out the form, makes an entry, and saves it.", async function() {
    const randomName = `New York ${faker.random.number()}`;
    await fillIn("#input-attestedName", randomName);
    this.text.entryProperties.forEach(async (prop, i) => {
      await fillIn(
        `#input-entryProperty-${prop.name}`,
        `test ${i} ${randomName}`
      );
    });
    await click("button.create-entry-button");
    const entries = await this.store.findAll("entry");
    const ourEntries = entries
      .toArray()
      .filter(entry => entry.attestedName === randomName);
    expect(ourEntries.length).to.equal(1);
    const testEntry = ourEntries[0];
    this.text.entryProperties.forEach(async (prop, i) => {
      expect(testEntry.properties[prop.name]).to.equal(
        `test ${i} ${randomName}`
      );
    });
    expect(testEntry.text.get("id")).to.equal(this.text.id);
  });
});
