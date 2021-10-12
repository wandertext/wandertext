import { Factory } from "ember-cli-mirage";
import faker from "faker";

export default Factory.extend({
  name(i) {
    return `${faker.random.words(4)} ${i + 1}`;
  },

  markdownName() {
    return `_${this.name}_`;
  },

  popupTemplate() {
    return faker.lorem.paragraph(3);
  },

  markdownBlurb() {
    return faker.lorem.paragraph(2);
  },

  url() {
    return faker.internet.url();
  },

  imgSrc() {
    return faker.image.cats(200, 200);
  },

  imgHref() {
    return faker.internet.url();
  },

  year() {
    return faker.date.past();
  },

  createdAt() {
    return new Date();
  },
});
