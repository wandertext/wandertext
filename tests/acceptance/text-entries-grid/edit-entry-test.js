import { describe, it } from "mocha";
import { expect } from "chai";
import { setupApplicationTest } from "ember-mocha";
import { visit, fillIn } from "@ember/test-helpers";
import { authenticateSession } from "ember-simple-auth/test-support";
import { setupMirage } from "ember-cli-mirage/test-support";

describe("Acceptance | text/entries grid | edit entry", function() {
  const hooks = setupApplicationTest();
  setupMirage(hooks);

  it.skip("can edit an entry", async function() {
    authenticateSession();
    this.store = this.owner.lookup("service:store");
    this.currentContributor = this.owner.lookup("service:currentContributor");
    this.currentContributor.contributor = {
      id: "contrib-username-id",
      firstName: "contrib-first",
      lastName: "contrib-last"
    };
    this.text = await this.server.create("text");
    // Create two dummy entries ahead of time.
    this.entry1 = await this.server.create("entry", {
      text: this.text,
      properties: {
        page: 1,
        special: "entry one"
      }
    });
    this.entry2 = await this.server.create("entry", {
      text: this.text,
      properties: {
        page: 1,
        special: "entry two"
      }
    });

    await visit(`/workbench/texts/${this.text.id}/entries/`);
    const propSpecialCells = document.querySelectorAll(
      ".table-edit-input.entry-property-properties-page"
    );
    expect(propSpecialCells.length).to.equal(2);
    const specialCell = propSpecialCells[0];
    const updatedEntryId = specialCell.classList
      .toString()
      .split(" ")
      .filter(klass => klass.startsWith("entry-id"))[0]
      .replace("entry-id-", "");
    await fillIn(specialCell, "new page");
    await fillIn(
      document.querySelector(
        `.entry-property-properties-page.entry-id-${updatedEntryId}`
      ),
      "boogie"
    );
    const updatedEntry = await this.server.db.entries[0];
    expect(updatedEntry.properties.page).to.equal("new page");
    // Contrib should get added to contribs array
  });
});
