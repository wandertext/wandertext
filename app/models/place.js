import DS from "ember-data";

const { attr, hasMany } = DS;

export default class Place extends DS.Model {
  @attr("number") latitude;

  @attr("number") longitude;

  @attr("string") name;

  @attr("number") geonameId;

  @attr() bbox;

  @hasMany("entry", { async: false }) entries;

  @hasMany("flag", { async: false }) flags;

  @hasMany("contributor", { async: false }) contributors;
}
