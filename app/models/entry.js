import DS from "ember-data";
import LoadableModel from "ember-data-storefront/mixins/loadable-model";

const { attr, belongsTo, hasMany } = DS;

export default class Entry extends DS.Model.extend(LoadableModel) {
  @attr("string") attestedName;

  @attr("string") note;

  @attr() properties;

  // @attr() nywalkerProperties;

  @belongsTo("place", { async: true }) place;

  @belongsTo("text", { async: true }) text;

  @hasMany("contributor", { async: true }) contributors;

  @hasMany("flag", { async: true }) flags;

  @attr("date") createdOn;

  @attr("date") modifiedOn;
}
