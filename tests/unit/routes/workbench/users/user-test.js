import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Route | workbench/users/user", function() {
  setupTest();

  it("exists", function() {
    const route = this.owner.lookup("route:workbench/users/user");
    expect(route).to.be.ok;
  });
});
