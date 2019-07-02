import { describe, it } from "mocha";
import { expect } from "chai";
import { setupApplicationTest } from "ember-mocha";
import { authenticateSession } from "ember-simple-auth/test-support";
import { currentURL, visit, click, fillIn } from "@ember/test-helpers";
import { setupMirage } from "ember-cli-mirage/test-support";
import faker from "faker";

describe("Acceptance | create new Text", function() {
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
  });

  it.skip("includes the text-form component", async function() {
    await visit("/workbench/texts/new");
    expect(this.element.querySelector("#text-form")).to.be.ok;
  });

  it.skip("fills out the form, makes a Text, & transitions to workbench/texts/index", async function() {
    const name = faker.commerce.productName();
    const slug = faker.helpers.slugify(name) + "-" + faker.random.number();
    const store = this.owner.lookup("service:store");
    await visit("/workbench/texts/new");
    await fillIn("#input-name", name);
    await fillIn("#input-slug", slug);
    await click(".create-text-button");

    const texts = await store.query("text", {
      filter: { name }
    });
    const text = texts.firstObject;
    expect(text.name).to.equal(name);
    expect(text.slug).to.equal(slug);
    expect(currentURL()).to.equal("/workbench/texts");
  });
});
