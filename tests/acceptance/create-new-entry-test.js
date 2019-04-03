import { describe, it } from "mocha";
import { setupApplicationTest } from "ember-mocha";

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
});
