import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Serializer | application", function() {
  setupTest();

  // Replace this with your real tests.
  it("exists", function() {
    const store = this.owner.lookup("service:store");
    const serializer = store.serializerFor("application");

    expect(serializer).to.be.ok;
  });

  it("serializes records", function() {
    const store = this.owner.lookup("service:store");
    const record = store.createRecord("text", {});

    const serializedRecord = record.serialize();

    expect(serializedRecord).to.be.ok;
  });
});
