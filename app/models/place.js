import DS from "ember-data";

const { attr, hasMany } = DS;

export default class Place extends DS.Model {
  @attr("string", { defaultValue: "Feature" }) type;

  @attr() bbox;

  @attr() geometry;

  @attr() properties;

  @hasMany("entry") entries;

  @hasMany("flag") flags;

  @hasMany("contributor") contributors;
}
