import { Factory } from "ember-cli-mirage";
import { date, random, address } from "faker";

export default Factory.extend({
  attestedName() {
    return address.city();
  },

  properties(i) {
    const word = random.word();
    return {
      page: Math.floor(Math.random() * 28 + 2),
      sequence: i,
      special: `${word} special`,
      specialReadonly: `${word} read only`,
      specialInputLabel: `${word} input label`
    };
  },

  createdOn() {
    return date.past();
  }
});
