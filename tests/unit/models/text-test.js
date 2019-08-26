import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Model | text", function() {
  const hooks = setupTest();

  hooks.beforeEach(async function() {
    this.store = this.owner.lookup("service:store");
    this.baburnama = this.store.createRecord("text", {
      id: "001",
      name: "Baburnama"
    });
    this.nightwood = this.store.createRecord("text", {
      id: "002",
      name: "Nightwood"
    });
  });

  // Replace this with your real tests.
  it.skip("exists", function() {
    expect(this.baburnama).to.be.ok;
    expect(this.baburnama.name).to.equal("Baburnama");
  });

  it.skip("has entries", async function() {
    await this.store.createRecord("text", {
      id: "101",
      name: "Baburnama"
    });
    await this.store.createRecord("entry", {
      attestedName: "Kabul",
      text: "101"
    });
    await this.store.createRecord("entry", {
      attestedName: "Samarkand",
      text: "101"
    });
    const baburnama = await this.store.findRecord("text", "101", {
      include: "entries"
    });
    expect(baburnama.entries).to.have.lengthOf(2);
  });
});
