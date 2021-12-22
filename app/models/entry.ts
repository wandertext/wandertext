import Model, { attr, hasMany, belongsTo } from "@ember-data/model";
import DS from "ember-data";
import Contributor from "./contributor";
import Place from "./place";
import Flag from "./flag";
import Text from "./text";

export default class EntryModel extends Model {
  @attr()
  declare properties?: any;

  @attr()
  declare attestedName?: string;

  @attr()
  declare note?: string;

  // Is this a lazy loaded id for the place?
  @attr()
  declare placeId?: string;

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

  @hasMany("contributor")
  declare contributor: DS.PromiseManyArray<Contributor>;

  @hasMany("flag")
  declare flag: DS.PromiseManyArray<Flag>;

  // If async is switched to false, these have to be the objects in themselves (Place),
  // not DS.PromiseObject<Place>.

  @belongsTo("place")
  declare place: DS.PromiseObject<Place>;

  @belongsTo("text")
  declare text: DS.PromiseObject<Text>;
}
