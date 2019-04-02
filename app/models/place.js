import Model from "ember-pouch/model";
import DS from "ember-data";

const { attr, hasMany } = DS;

export default class Place extends Model {
  @attr("string") name;

  @attr("string", { defaultValue: "Feature" }) type;

  @hasMany("entry") entries;
}
