import { Factory } from "miragejs";
import { faker } from "@faker-js/faker";

export default Factory.extend({
  attestedName() {
    return faker.location.city();
  },

  note() {
    return faker.lorem.paragraph(2);
  },

  createdAt() {
    return new Date();
  },
});
