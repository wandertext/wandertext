import Model, { attr, belongsTo } from "@ember-data/model";
import DS from "ember-data";
import Entry from "./entry";
import Place from "./place";
import Contributor from "./contributor";
import Text from "./text";

export default class FlagModel extends Model {
  @attr()
  declare comment?: string;

  @attr("date", {
    defaultValue() {
      return new Date();
    },
  })
  declare createdAt: Date;

  @attr("date")
  declare modifiedAt?: Date;

  // If async is switched to false, these have to be the objects in themselves (Place),
  // not DS.PromiseObject<Place>.

  @belongsTo("contributor")
  declare creator: DS.PromiseObject<Contributor>;

  @belongsTo("place")
  declare place: DS.PromiseObject<Place>;

  @belongsTo("entry")
  declare entry: DS.PromiseObject<Entry>;

  @belongsTo("text")
  declare text: DS.PromiseObject<Text>;
}
