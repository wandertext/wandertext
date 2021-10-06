import { Factory } from "ember-cli-mirage";
import faker from "faker";

export default Factory.extend({

  name(i){
    return `${faker.random.words(4)} ${i + 1}`;
  },

  markdownName() { 
    return `_${this.name}_`;
  }

});
