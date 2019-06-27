import { describe, it } from "mocha";
import { expect } from "chai";
import { setupApplicationTest } from "ember-mocha";
import { find, visit, currentURL, click } from "@ember/test-helpers";
import { setupMirage } from "ember-cli-mirage/test-support";

describe("Acceptance | contributor can log in", function() {
  const hooks = setupApplicationTest();
  setupMirage(hooks);

  it.only("lets contributors log in if they're allowed", async function() {
    await visit("/");
    expect(currentURL()).to.equal("/");
    await click(".login-button");
    expect(find(".contributor-auth-modal")).to.be.ok;
  });
});
