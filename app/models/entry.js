import Model, { belongsTo } from "@ember-data/model";

export default class EntryModel extends Model {
  @belongsTo("place") place;
  @belongsTo("text") text;
}
