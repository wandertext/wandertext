import { describe, it } from "mocha";
import { expect } from "chai";
import { setupApplicationTest } from "ember-mocha";
import { visit, click, fillIn } from "@ember/test-helpers";
import faker from "faker";

describe("Acceptance | create new Entry", function() {
  const hooks = setupApplicationTest();

  hooks.beforeEach(async function() {
    this.store = this.owner.lookup("service:store");
    const texts = await this.store.findAll("text");
    this.text = texts.firstObject;
    // This errors when the database is empty, of course, since then there is no text.
    this.text.set("entryProperties", [
      { name: "prop1" },
      { name: "prop2" },
      { name: "prop3" }
    ]);
    this.attestedNames = [faker.address.city(), faker.address.city()];
    this.attestedNames.forEach(async attestedName => {
      const entry = this.store.createRecord("entry", { attestedName });
      this.text.entries.pushObject(entry);
      return entry;
    });
    await this.text.save();
    await visit(`/texts/${this.text.slug}/entries/new`);
  });

  it("fills out the form, makes an entry, and saves it.", async function() {
    const randomName = `New York ${faker.random.number()}`;
    await fillIn("#input-attestedName", randomName);
    await fillIn("#input-entrySort", "25");
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
    this.text.entryProperties.forEach(async (prop, i) => {
      expect(ourEntries[0].properties[prop.name]).to.equal(
        `test ${i} ${randomName}`
      );
    });
  });
});
