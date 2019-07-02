import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Transform | date", function() {
  setupTest();

  it("exists", function() {
    const transform = this.owner.lookup("transform:date");
    expect(transform).to.be.ok;
  });

  it("deserializes Firestore Timestamps", function() {
    const transform = this.owner.lookup("transform:date");
    const timestamp = {
      _seconds: 200203200,
      _nanoseconds: 0
    };
    expect(transform.deserialize(timestamp).getTime()).to.eql(
      new Date("1976-05-06T04:00:00.000Z").getTime()
    );
  });

  it("serializes nothing", function() {
    const transform = this.owner.lookup("transform:date");
    const someDate = new Date();
    expect(transform.serialize(someDate)).to.eql(someDate);
  });
});
