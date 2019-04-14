import Model from "ember-pouch/model";
import DS from "ember-data";

const { attr, belongsTo, hasMany } = DS;

export default class Entry extends Model {
  @attr("string") attestedName;

  @attr("string") placeSlug;

  @attr("string") textSlug;

  @attr() userNames;

  @attr() properties;

  @attr() nywalkerProperties;

  @belongsTo("text") text;

  @hasMany("user") users;

  @attr("date") createdOn;

  @attr("date") modifiedOn;
}
