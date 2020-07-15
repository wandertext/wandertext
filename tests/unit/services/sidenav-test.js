import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Service | sidenav", function () {
  setupTest();

  // Replace this with your real tests.
  it("exists", function () {
    const service = this.owner.lookup("service:sidenav");
    expect(service).to.be.ok;
  });
});
