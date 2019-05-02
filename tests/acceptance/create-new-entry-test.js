import { describe, it } from "mocha";
import { expect } from "chai";
import { setupApplicationTest } from "ember-mocha";
import { visit, click, fillIn } from "@ember/test-helpers";
import faker from "faker";
import createText from "../helpers/create-text";
import createEntry from "../helpers/create-entry";

describe("Acceptance | create new Entry", function() {
  const hooks = setupApplicationTest();

  hooks.beforeEach(async function() {
    this.session = this.owner.lookup("service:session");
    this.session.isAuthenticated = true;
    this.store = this.owner.lookup("service:store");
    this.text = await createText(this.store);
    // Create two dummy entries ahead of time.
    this.text.entries.pushObject(createEntry(this.store, this.text));
    this.text.entries.pushObject(createEntry(this.store, this.text));
    await this.text.save();
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
