import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Route | workbench/users", function() {
  setupTest();

  it("exists", function() {
    const route = this.owner.lookup("route:workbench/users");
    expect(route).to.be.ok;
  });
});
