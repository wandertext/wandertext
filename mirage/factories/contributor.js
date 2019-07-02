import { Factory } from "ember-cli-mirage";
import { name, date, internet } from "faker";

export default Factory.extend({
  id() {
    return internet.userName();
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
    return {
      _seconds: date.past().getTime() / 1000
    };
  }
});
