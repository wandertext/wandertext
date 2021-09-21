import Model, { attr, belongsTo } from "@ember-data/model";

export default class FlagModel extends Model {
  @attr("string") comment;
  @attr("date", {
    defaultValue() {
      return new Date();
    },
  })
  createdAt;

  @attr("date") modifiedAt;
  @belongsTo("contributor") creator;
  @belongsTo("place") place;
  @belongsTo("entry") entry;
  @belongsTo("text") text;
}
