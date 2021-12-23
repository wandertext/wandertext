import Model, { attr, belongsTo, AsyncBelongsTo } from "@ember-data/model";
import Entry from "wandertext/models/entry";
import Place from "wandertext/models/place";
import Contributor from "wandertext/models/contributor";
import Text from "wandertext/models/text";

declare module "ember-data/types/registries/model" {
  export default interface ModelRegistry {
    flag: FlagModel;
  }
}

export default class FlagModel extends Model {
  @attr declare comment?: string;

  @attr("date", {
    defaultValue() {
      return new Date();
    },
  })
  declare createdAt: Date;

  @attr("date") declare modifiedAt?: Date;

  @belongsTo("contributor") declare creator: AsyncBelongsTo<Contributor>;

  @belongsTo("place") declare place: AsyncBelongsTo<Place>;

  @belongsTo("entry") declare entry: AsyncBelongsTo<Entry>;

  @belongsTo("text") declare text: AsyncBelongsTo<Text>;
}
