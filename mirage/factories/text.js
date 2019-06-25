import { Factory } from "ember-cli-mirage";
import { lorem } from "faker";

export default Factory.extend({
  name() {
    return lorem.words();
  },

  id() {
    return lorem.slug();
  },

  markdownBlurb() {
    return lorem.paragraph();
  },

  entryProperties() {
    return [
      {
        name: "page",
        type: "number",
        help: "thee page number"
      },
      {
        name: "sequence",
        type: "number"
      },
      {
        name: "special",
        type: "string",
        nullable: true
      },
      {
        name: "specialReadonly",
        type: "string",
        readOnly: true,
        nullable: true
      },
      {
        name: "specialInputLabel",
        type: "string",
        inputLabel: "special-input-label",
        nullable: true
      },
      {
        name: "diffOwner",
        type: "string",
        owner: "other-owner",
        nullable: true
      }
    ];
  },

  entrySort() {
    return ["page", "sequence"];
  }
});
