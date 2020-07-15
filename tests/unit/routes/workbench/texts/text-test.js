import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Route | workbench/texts/text", function () {
  setupTest();

  it("exists", function () {
    const route = this.owner.lookup("route:workbench/texts/text");
    expect(route).to.be.ok;
  });
});
