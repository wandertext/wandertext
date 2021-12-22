import Model, { attr, hasMany } from "@ember-data/model";
import DS from "ember-data";
import Entry from "./entry";
import Place from "./place";
import Flag from "./flag";
import Text from "./text";

export default class ContributorModel extends Model {
  // Unclear what the authentication attr is
  @attr()
  declare authentication?: string;

  @attr()
  declare firstName?: string;

  @attr()
  declare lastName?: string;

  @attr("boolean", { defaultValue: false })
  declare enabled: boolean;

  @attr("boolean", { defaultValue: false })
  declare editor: boolean;

  @attr("boolean", { defaultValue: false })
  declare admin: boolean;

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

  @hasMany("place")
  declare place: DS.PromiseManyArray<Place>;

  @hasMany("flag")
  declare flag: DS.PromiseManyArray<Flag>;

  @hasMany("text")
  declare text: DS.PromiseManyArray<Text>;
}
