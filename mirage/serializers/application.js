import { Serializer } from "ember-cli-mirage";

export default Serializer.extend({
  keyForAttribute(attr) {
    return attr;
  }
});
