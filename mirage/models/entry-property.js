import { Model, belongsTo } from "ember-cli-mirage";

export default Model.extend({
  text: belongsTo("text", { async: false }),
  contributor: belongsTo("contributor", { async: false })
});
