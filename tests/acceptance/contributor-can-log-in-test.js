import { describe, it } from "mocha";
import { expect } from "chai";
import { setupApplicationTest } from "ember-mocha";
import { find, visit, currentURL, click } from "@ember/test-helpers";
import { setupMirage } from "ember-cli-mirage/test-support";

describe("Acceptance | contributor can log in", function() {
  const hooks = setupApplicationTest();
  setupMirage(hooks);

  it("Takes unlogged in users to the login modal", async function() {
    await visit("/");
    expect(currentURL()).to.equal("/");
    await click("button.login-button");
    expect(find(".contributor-auth-modal")).to.be.ok;
  });
});
