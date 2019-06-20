import { describe, it } from "mocha";
import { expect } from "chai";
import { setupApplicationTest } from "ember-mocha";
import { click, visit, currentURL } from "@ember/test-helpers";
import { authenticateSession } from "ember-simple-auth/test-support";
import { setupMirage } from "ember-cli-mirage/test-support";

describe("Acceptance | use ember table with text entries", function() {
  const hooks = setupApplicationTest();
  setupMirage(hooks);

  hooks.beforeEach(async function() {
    // Set up contributor.
    authenticateSession();
    this.store = this.owner.lookup("service:store");
    this.currentContributor = this.owner.lookup("service:currentContributor");
    this.currentContributor.contributor = {
      username: "github-username",
      id: "contrib-id",
      firstName: "contrib-first",
      lastName: "contrib-last"
    };
    // Set up text.
    this.text = await this.server.create("text", {
      name: "Babur-test",
      id: "babur-test"
    });
    // Set up entries.
    await this.server.create("entry", {
      id: 1,
      properties: {
        page: 3,
        sequence: 2
      },
      attestedName: "Agra",
      text: this.text
    });
    await this.server.create("entry", {
      id: 2,
      properties: {
        page: 1,
        sequence: 3
      },
      attestedName: "Belarus",
      text: this.text
    });
    await this.server.create("entry", {
      id: 3,
      properties: {
        page: 2,
        sequence: 1
      },
      attestedName: "Chile",
      text: this.text
    });
    // Set up url.
    this.url = "/workbench/texts/babur-test/entries";
    await visit(this.url);
  });

  it("can visit /workbench/texts/babur-test/entries", async function() {
    expect(currentURL()).to.equal(this.url);
  });

  it("shows the table as expected, with three rows", async function() {
    expect(this.element.querySelector("tbody"))
      .to.have.descendants("tr")
      .and.have.length(3);
  });

  it.skip("sorts by page descending when I click on page header", async function() {
    const pageHeader = Array.prototype.filter.call(
      this.element.querySelectorAll("th"),
      th => /Page/.test(th.textContent)
    )[0];
    await click(`#${pageHeader.id}`);
    const rows = Array.prototype.map.call(
      this.element.querySelectorAll("tbody > tr"),
      tr => {
        return {
          id: tr.id,
          attestedName: tr.children[0].textContent.trim(),
          page: Number(tr.children[1].textContent.trim()),
          sequence: Number(tr.children[2].textContent.trim())
        };
      }
    );
    expect(rows.map(r => r.page)).to.deep.equal([3, 2, 1]);
  });

  it.skip("sorts by sequence descending when I click on sequence header", async function() {
    const seqHeader = Array.prototype.filter.call(
      this.element.querySelectorAll("th"),
      th => /Sequence/.test(th.textContent)
    )[0];
    await click(`#${seqHeader.id}`);
    const rows = Array.prototype.map.call(
      this.element.querySelectorAll("tbody > tr"),
      tr => {
        return {
          id: tr.id,
          attestedName: tr.children[0].textContent.trim(),
          page: Number(tr.children[1].textContent.trim()),
          sequence: Number(tr.children[2].textContent.trim())
        };
      }
    );
    expect(rows.map(r => r.sequence)).to.deep.equal([3, 2, 1]);
  });

  it.skip("sorts by attestedName descending when I click on attestedName header", async function() {
    const nameHeader = Array.prototype.filter.call(
      this.element.querySelectorAll("th"),
      th => /Attested/.test(th.textContent)
    )[0];
    await click(`#${nameHeader.id}`);
    const rows = Array.prototype.map.call(
      this.element.querySelectorAll("tbody > tr"),
      tr => {
        return {
          id: tr.id,
          attestedName: tr.children[0].textContent.trim(),
          page: Number(tr.children[1].textContent.trim()),
          sequence: Number(tr.children[2].textContent.trim())
        };
      }
    );
    expect(rows.map(r => r.attestedName)).to.deep.equal([
      "Chile",
      "Belarus",
      "Agra"
    ]);
  });
});
