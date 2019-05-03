import { describe, it } from "mocha";
import { expect } from "chai";
import { setupApplicationTest } from "ember-mocha";
import {
  authenticateSession,
  invalidateSession
} from "ember-simple-auth/test-support";
import { find, visit, click, waitFor } from "@ember/test-helpers";

describe("Acceptance | sidenav login", function() {
  setupApplicationTest();

  it("sees the login button when not logged in", async function() {
    invalidateSession();
    await visit("/");
    await click("#sidenav-button");
    await click("#login-button > .md-button > button");
    expect(find("#login-to-github-button")).to.be.ok;
  });

  it("sees the logout sidenav button when logged in", async function() {
    authenticateSession();
    await visit("/");
    await click("#sidenav-button");
    await waitFor("#login-button");
    expect(find("#login-button")).to.contain.text("Log Out of @");
  });
});
