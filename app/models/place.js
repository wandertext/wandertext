import Model, { hasMany } from "@ember-data/model";

export default class PlaceModel extends Model {
  @hasMany("entry") entries;
}
