import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Service | logo", function() {
  setupTest();

  // Replace this with your real tests.
  it("exists", function() {
    const service = this.owner.lookup("service:logo");
    expect(service).to.be.ok;
  });
});
