import { Factory } from "miragejs";
import { faker } from "@faker-js/faker";

export default Factory.extend({
  name() {
    return faker.address.cityName();
  },

  note() {
    return faker.lorem.paragraph(2);
  },

  source() {
    return faker.lorem.paragraph(2);
  },

  latitude() {
    return 0.8 * faker.address.latitude();
  },

  longitude() {
    return 0.8 * faker.address.longitude();
  },

  geonameId() {
    return faker.datatype.number();
  },

  createdAt() {
    return new Date();
  },
});
