import Model from "ember-pouch/model";
import DS from "ember-data";

const { attr, hasMany } = DS;

export default class Place extends Model {
  @attr("string", { defaultValue: "Feature" }) type;

  @attr() bbox;

  @attr() geometry;

  @attr() properties;

  @hasMany("entry") entries;

  @hasMany("flag") flags;

  @hasMany("contributor") contributors;
}
