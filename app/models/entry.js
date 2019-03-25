import Model from "ember-pouch/model";
import DS from "ember-data";

const { attr, belongsTo } = DS;

export default class Entry extends Model {
  @attr("string") type;

  @belongsTo("text") text;
}
