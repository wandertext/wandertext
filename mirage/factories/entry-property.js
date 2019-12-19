import { Factory } from "ember-cli-mirage";
import { lorem, random } from "faker";

export default Factory.extend({
  name() {
    return random.word();
  },

  type() {
    return "string";
  },

  help() {
    return lorem.sentence();
  },

  readOnly() {
    return false;
  },

  inputLabel() {
    return lorem.word();
  },

  nullable() {
    return true;
  },

  owner() {
    return "muziejus";
  }
});
