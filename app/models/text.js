import Model from "ember-pouch/model";
import DS from "ember-data";

const { attr, hasMany } = DS;

export default class Text extends Model {
  @attr("string") name;

  @attr("string") slug;

  @attr() entrySort;

  @attr() userNames;

  @attr() nywalkerProperties;

  @hasMany("entry") entries;

  @hasMany("user") users;

  @attr("date") createdOn;

  @attr("date") modifiedOn;
}
