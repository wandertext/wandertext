import { Factory } from "ember-cli-mirage";
import { date, address, helpers } from "faker";

export default Factory.extend({
  type: "Feature",

  geometry() {
    return {
      type: "Point",
      coordinates: [address.longitude(), address.latitude()]
    };
  },

  properties() {
    const name = address.city();
    return {
      createdOn: date.past(),
      name,
      slug: helpers.slugify(name)
    };
  }
});
