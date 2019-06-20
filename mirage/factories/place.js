import { Factory } from "ember-cli-mirage";
import { random, date, address, lorem } from "faker";

export default Factory.extend({
  name() {
    return address.city();
  },

  latitude() {
    return address.latitude();
  },

  longitude() {
    return address.longitude();
  },

  createdOn() {
    return date.past();
  },

  id() {
    return lorem.slug();
  },

  geonameId() {
    return random.number();
  }
});
