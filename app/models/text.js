import Model from "ember-pouch/model";
import DS from "ember-data";

const { attr, hasMany } = DS;

export default class Text extends Model {
  @attr("string") type;

  @attr("string") name;

  @attr("string") slug;

  @attr("string") entrySort;

  @hasMany("entry") entries;
}
