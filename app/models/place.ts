import Model, { attr, hasMany } from "@ember-data/model";
import DS from "ember-data";
import Entry from "./entry";
import Contributor from "./contributor";
import Flag from "./flag";

export default class PlaceModel extends Model {
  @attr()
  declare name: string;

  @attr()
  declare note?: string;

  @attr()
  declare source?: string;

  @attr("number")
  declare latitude?: number;

  @attr("number")
  declare longitude?: number;

  @attr("number")
  declare geonameId?: number;

  @attr("number")
  declare confidence?: number;

  @attr("date", {
    defaultValue() {
      return new Date();
    },
  })
  declare createdAt: Date;

  @attr("date")
  declare modifiedAt?: Date;

  // If async is switched to false, these have to be EmberArrays, not DS.PromiseManyArrays.
  // EmberArray is imported from "@ember/array";

  @hasMany("entry")
  declare entry: DS.PromiseManyArray<Entry>;

  @hasMany("contributor")
  declare contributor: DS.PromiseManyArray<Contributor>;

  @hasMany("flag")
  declare flag: DS.PromiseManyArray<Flag>;
}
