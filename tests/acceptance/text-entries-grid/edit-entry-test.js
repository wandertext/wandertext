import { describe, it } from "mocha";
import { expect } from "chai";
import { setupApplicationTest } from "ember-mocha";
import { find, visit, fillIn } from "@ember/test-helpers";
import { authenticateSession } from "ember-simple-auth/test-support";
import { setupMirage } from "ember-cli-mirage/test-support";

describe("Acceptance | text/entries grid | edit entry", function() {
  const hooks = setupApplicationTest();
  setupMirage(hooks);

  it("saves the entry when the row changes", async function(done) {
    this.timeout(5000);
    authenticateSession();
    this.store = this.owner.lookup("service:store");
    this.currentContributor = this.owner.lookup("service:currentContributor");
    this.currentContributor.contributor = {
      id: "contrib-username-id",
      firstName: "contrib-first",
      lastName: "contrib-last"
    };
    this.text = await this.server.create("text");
    this.entry1 = await this.server.create("entry", {
      attestedName: "place one",
      text: this.text,
      properties: {
        page: 1,
        sequence: 2,
        special: "entry one"
      }
    });
    this.entry2 = await this.server.create("entry", {
      attestedName: "place two",
      text: this.text,
      properties: {
        page: 1,
        sequence: 2,
        special: "entry two"
      }
    });
    const entryModel = await this.store.findRecord("entry", this.entry1.id);

    await visit(`/workbench/texts/${this.text.id}/entries/`);
    expect(entryModel.hasDirtyAttributes).to.be.false;
    await fillIn(
      find(`.cell-attestedName.cell-id-${this.entry1.id} > input`),
      "new place"
    );
    await fillIn(
      find(`.cell-attestedName.cell-id-${this.entry2.id} > input`),
      "new place"
    );
    expect(entryModel.hasDirtyAttributes).to.be.false;
    expect(entryModel.attestedName).to.equal("new place");

    done();
  });
});
