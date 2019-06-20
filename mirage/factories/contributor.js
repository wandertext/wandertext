import { Factory } from "ember-cli-mirage";
import { name, date, internet } from "faker";

export default Factory.extend({
  username() {
    return internet.username();
  },

  authentication: "github",

  firstName() {
    return name.firstName();
  },

  lastName() {
    return name.lastName();
  },

  enabled: true,

  editor: false,

  admin: false,

  createdOn() {
    return date.past();
  }
});
