import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Route | workbench/contributors/contributor", function () {
  setupTest();

  it("exists", function () {
    const route = this.owner.lookup("route:workbench/contributors/contributor");
    expect(route).to.be.ok;
  });
});
