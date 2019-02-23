import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Service | data", function() {
  setupTest();

  // Replace this with your real tests.
  it("exists", function() {
    const service = this.owner.lookup("service:data");
    expect(service).to.be.ok;
  });

  describe("#db", function() {
    it("exists as a property", function() {
      const service = this.owner.lookup("service:data");
      expect(service.db).to.be.ok;
    });
    it("is a database named “wandertext”", function() {
      const service = this.owner.lookup("service:data");
      service.db
        .info()
        .then(result => result.db_name)
        .then(name => {
          expect(name).to.equal("wandertext");
        });
    });
  });

  describe("#getAll", function() {
    it("returns all of the documents", async function() {
      const service = this.owner.lookup("service:data");
      const officialDocCount = await service.db
        .info()
        .then(result => result.doc_count);
      const docs = await service.getAll();
      expect(docs).to.have.lengthOf(officialDocCount);
    });
  });

  describe("#getAllByType", function() {
    it("returns documents that are all of a single type.", function() {
      const service = this.owner.lookup("service:data");
      service.getAllByType("text").then(docs => {
        expect(docs.filter(d => d.type === "text")).to.have.lengthOf(
          docs.length
        );
      });
    });
  });

  describe("#getDocById", function() {
    const id = "entry-000000005401";
    it("returns a single document (in an array)", function() {
      const service = this.owner.lookup("service:data");
      service.getDocById(id).then(docArray => {
        expect(docArray).to.have.lengthOf(1);
      });
    });
  });

  describe("#getEntriesByText", function() {
    const text = "text-000000000014";
    it("returns only entries", function() {
      const service = this.owner.lookup("service:data");
      service.getEntriesByText(text).then(entries => {
        expect(entries.filter(d => d.type === "entry")).to.have.lengthOf(
          entries.length
        );
      });
    });

    it("from the specified text", function() {
      const service = this.owner.lookup("service:data");
      service.getEntriesByText(text).then(entries => {
        expect(entries.filter(d => d.text === text)).to.have.lengthOf(
          entries.length
        );
      });
    });
  });

  describe("#getTextBySlug", function() {
    const slug = "nightwood-1936";
    it("returns a single document", function() {
      const service = this.owner.lookup("service:data");
      service.getTextBySlug(slug).then(text => {
        expect(text).to.have.a.property("_id");
      });
    });
    it("that is a text", function() {
      const service = this.owner.lookup("service:data");
      service.getTextBySlug(slug).then(text => {
        expect(text.type).to.equal("text");
      });
    });
  });
});
