import { Model, hasMany, belongsTo } from "ember-cli-mirage";

export default Model.extend({
  place: belongsTo("place", { async: false }),
  text: belongsTo("text", { async: false }),
  contributors: hasMany("contributor", { async: false })
});
