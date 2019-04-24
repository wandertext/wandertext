import Model from "ember-pouch/model";
import DS from "ember-data";

const { attr, belongsTo, hasMany } = DS;

export default class Entry extends Model {
  @attr("string") attestedName;

  @attr("string") note;

  @attr() properties;

  @attr() nywalkerProperties;

  @belongsTo("place") place;

  @belongsTo("text") text;

  @hasMany("user") users;

  @hasMany("flag") flags;

  @attr("date") createdOn;

  @attr("date") modifiedOn;
}
