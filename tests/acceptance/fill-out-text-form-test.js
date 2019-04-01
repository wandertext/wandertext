import { describe, it } from "mocha";
import { expect } from "chai";
import { setupApplicationTest } from "ember-mocha";
import { visit, click, fillIn } from "@ember/test-helpers";

describe("Acceptance | fill out text form", function() {
  setupApplicationTest();

  // Causes "You can only unload a record which is not inFlight." error in
  // afterEach hook.
  it("should include the text-form component", async function() {
    await visit("/texts/new");
    expect(this.element.querySelector("#text-form")).to.be.ok;
  });

  it.skip("can fill out the text form", async function() {
    const name = "Baburnama";
    const slug = "baburnama-1530";
    const entrySort = "folio";
    const store = this.owner.lookup("service:store");
    await visit("/texts/new");
    await fillIn("#input-name", name);
    await fillIn("#input-slug", slug);
    await fillIn("#input-entrySort", entrySort);
    await click("#create-text-button");
    const text = store.peekAll("text").toArray()[0];
    expect(text.name).to.equal(name);
    expect(text.slug).to.equal(slug);
    expect(text.entrySort).to.equal(entrySort);
  });
});
