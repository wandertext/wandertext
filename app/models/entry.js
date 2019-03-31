import Model from "ember-pouch/model";
import DS from "ember-data";

const { belongsTo } = DS;

export default class Entry extends Model {
  @belongsTo("text") text;
}
