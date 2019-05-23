import { Factory } from "ember-cli-mirage";
import faker from "faker";

export default class TextFactory extends Factory {
  name(i) {
    return `Txt ${i}`;
  }

  slug() {
    return `${faker.helpers.slugify(this.name)}-${faker.random.number()}`;
  }

  markdownBlurb() {
    return faker.lorem.paragraph();
  }

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
  }

  entrySort() {
    return ["page", "sequence"];
  }
}
