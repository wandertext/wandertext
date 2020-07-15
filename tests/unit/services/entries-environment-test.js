import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Service | entries-environment", function () {
  setupTest();

  // Replace this with your real tests.
  it("exists", function () {
    const service = this.owner.lookup("service:entries-environment");
    expect(service).to.be.ok;
  });
});
