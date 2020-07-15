import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Route | workbench/contributors/new", function () {
  setupTest();

  it("exists", function () {
    const route = this.owner.lookup("route:workbench/contributors/new");
    expect(route).to.be.ok;
  });
});
