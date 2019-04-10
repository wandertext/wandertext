import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";
import { visit, find } from "@ember/test-helpers";

describe("Unit | Route | texts/text/entries/new", function() {
  const hooks = setupTest();

  hooks.beforeEach(function() {
    this.route = this.owner.lookup("route:texts/text/entries/new");
  });

  it("exists", function() {
    expect(this.route).to.be.ok;
  });

  it.skip("shows the entry-form", async function() {
    const store = this.owner.lookup("service:store");
    const texts = await store.findAll("text");
    await visit(`/texts/${texts.firstObject.slug}/entries/new`);
    expect(find("#entry-form")).to.be.ok;
  });
});
