import Model, { attr, hasMany } from "@ember-data/model";

export default class PlaceModel extends Model {
  @attr("string") name;
  @attr("string") note;
  @attr("string") source;
  @attr("number") latitude;
  @attr("number") longitude;
  @attr("number") geonameId;
  @attr("number") confidence;
  @attr("date", {
    defaultValue() {
      return new Date();
    },
  })
  createdAt;

  @attr("date") modifiedAt;
  @hasMany("entry") entries;
  @hasMany("contributor") contributors;
  @hasMany("flag") flags;
}
