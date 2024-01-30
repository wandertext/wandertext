import { Factory } from "miragejs";
import { faker } from "@faker-js/faker";

export default Factory.extend({
  name() {
    return faker.location.city();
  },

  note() {
    return faker.lorem.paragraph(2);
  },

  source() {
    return faker.lorem.paragraph(2);
  },

  latitude() {
    return 0.8 * faker.location.latitude();
  },

  longitude() {
    return 0.8 * faker.location.longitude();
  },

  geonameId() {
    return faker.number.int();
  },

  createdAt() {
    return new Date();
  },
});
