import { Factory } from "ember-cli-mirage";
import faker from "faker";

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
    return faker.address.latitude();
  },

  longitude() {
    return faker.address.longitude();
  },

  geonameId() {
    return faker.datatype.number();
  },

  createdAt() {
    return new Date();
  },
});