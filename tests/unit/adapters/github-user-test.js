import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Adapter | github user", function() {
  setupTest();

  // Replace this with your real tests.
  it("exists", function() {
    const adapter = this.owner.lookup("adapter:github-user");
    expect(adapter).to.be.ok;
  });
});
