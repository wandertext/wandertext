import Model from "ember-pouch/model";
import DS from "ember-data";

const { attr, belongsTo, hasMany } = DS;

export default class Entry extends Model {
  @attr("string") attestedName;

  @attr() properties;

  @belongsTo("text") text;

  @hasMany("user") users;
}
