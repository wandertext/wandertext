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
        type: "number"
      },
      {
        name: "sequence",
        type: "number"
      },
      {
        name: "special",
        type: "string"
      },
      {
        name: "specialReadonly",
        type: "string",
        readOnly: true
      },
      {
        name: "specialInputLabel",
        type: "string",
        inputLabel: "special-input-label"
      }
    ];
  },

  entrySort() {
    return ["page", "sequence"];
  }
});
