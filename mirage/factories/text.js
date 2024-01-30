import { Factory } from "miragejs";
import { faker } from "@faker-js/faker";

export default Factory.extend({
  name(i) {
    return `${faker.lorem.words(4)} ${i + 1}`;
  },

  markdownName() {
    return `_${this.name}_`;
  },

  popupTemplate() {
    return faker.lorem.paragraph(3);
  },

  markdownBlurb() {
    return faker.lorem.paragraph(6);
  },

  url() {
    return faker.internet.url();
  },

  imgSrc() {
    return faker.image.urlLoremFlickr({ category: "animals" });
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
