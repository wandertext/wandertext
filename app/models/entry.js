import Model, { attr, hasMany, belongsTo } from "@ember-data/model";

export default class EntryModel extends Model {
  @attr() properties;
  @attr("string") attestedName;
  @attr("string") note;
  // Is this a lazy loaded id for the place?
  @attr("string") placeID;
  @attr("date", {
    defaultValue() {
      return new Date();
    },
  })
  createdAt;

  @attr("date") modifiedAt;
  @hasMany("flag") flags;
  @belongsTo("place") place;
  @belongsTo("text") text;
}
