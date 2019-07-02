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
    return {
      _seconds: date.past().getTime() / 1000
    };
  },

  id() {
    return lorem.slug();
  },

  geonameId() {
    return random.number();
  }
});
