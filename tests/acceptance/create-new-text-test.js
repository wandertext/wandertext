import { describe, it } from "mocha";
import { expect } from "chai";
import { setupApplicationTest } from "ember-mocha";
import {
  pauseTest,
  resumeTest,
  currentURL,
  visit,
  click,
  fillIn
} from "@ember/test-helpers";
import faker from "faker";

describe("Acceptance | create new Text", function() {
  setupApplicationTest();

  it("includes the text-form component", async function() {
    await visit("/texts/new");
    expect(this.element.querySelector("#text-form")).to.be.ok;
  });

  it("fills out the form, makes a Text, & transitions to texts/index", async function() {
    const name = faker.commerce.productName();
    const slug = faker.helpers.slugify(name) + "-" + faker.random.number();
    const entrySort = faker.lorem.word();
    const store = this.owner.lookup("service:store");
    await visit("/texts/new");
    await fillIn("#input-name", name);
    await fillIn("#input-slug", slug);
    await fillIn("#input-entrySort", entrySort);
    await click(".create-text-button");
    pauseTest();

    const text = await store.queryRecord("text", {
      filter: { name }
    });
    expect(text.name).to.equal(name);
    expect(text.slug).to.equal(slug);
    expect(text.entrySort).to.equal(entrySort);
    expect(currentURL()).to.equal("/texts");
    resumeTest();
  });
});
