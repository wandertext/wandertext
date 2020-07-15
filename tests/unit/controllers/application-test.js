import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Controller | application", function () {
  setupTest();

  // Replace this with your real tests.
  it("exists", function () {
    const controller = this.owner.lookup("controller:application");
    expect(controller).to.be.ok;
  });
});
