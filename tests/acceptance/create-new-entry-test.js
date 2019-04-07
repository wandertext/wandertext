import { describe, it } from "mocha";
import { setupApplicationTest } from "ember-mocha";
import { click, fillIn } from "@ember/test-helpers";

describe("Acceptance | create new Entry", function() {
  setupApplicationTest();
  it("opens up a Text");
  it("has a “Create New Entry” button");
  it("has a form for a new Entry appear upon clicking the button.");
  it("features `text.entrySort` as a field value");
  it("fills out the form, makes an entry, and transitions back to the Text.");
  it(
    "has a new Entry that belongs to the Text and has a value saved for the `text.entrySort`"
  );
  it.skip("creates an Entry when the boxes are filled in and button is pressed", async function() {
    await fillIn("#input-attestedName", "New York");
    await fillIn("#input-entrySort", "25");
    this.text.entryProperties.forEach(async (prop, i) => {
      await fillIn(`#input-entryProperty-${prop.name}`, "test" + i);
    });
    await click("button.create-entry-button");
  });
});
