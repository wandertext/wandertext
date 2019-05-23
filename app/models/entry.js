import DS from "ember-data";

const { attr, belongsTo, hasMany } = DS;

export default class Entry extends DS.Model {
  @attr("string") attestedName;

  @attr("string") note;

  @attr() properties;

  @attr() nywalkerProperties;

  @belongsTo("place") place;

  @belongsTo("text") text;

  @hasMany("contributor") contributors;

  @hasMany("flag") flags;

  @attr("date") createdOn;

  @attr("date") modifiedOn;
}
