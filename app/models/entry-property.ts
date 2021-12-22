import Model, { attr, hasMany } from "@ember-data/model";
import DS from "ember-data";
import Text from "./text";

export default class EntryPropertyModel extends Model {
  @attr()
  declare name?: string;

  @attr()
  declare type?: string;

  @attr()
  declare help?: string;

  @attr()
  declare inputLabel?: string;

  @attr()
  declare owner?: string;

  @attr("boolean", { defaultValue: true })
  declare nullable: boolean;

  // If async is switched to false, these have to be EmberArrays, not DS.PromiseManyArrays.
  // EmberArray is imported from "@ember/array";

  @hasMany("text")
  declare text: DS.PromiseManyArray<Text>;
}
