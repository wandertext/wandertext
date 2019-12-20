import { Factory } from "ember-cli-mirage";
import { lorem } from "faker";

export default Factory.extend({
  name() {
    return lorem.words();
  },

  id() {
    return lorem.slug();
  },

  imgSrc() {
    return "http://lorempixel.com/200/300/technics/";
  },

  markdownBlurb() {
    return lorem.paragraph();
  },

  markdownName() {
    return `_${lorem.words()}_`;
  },

  entrySort() {
    return ["page", "sequence"];
  }
});
