import Model, { attr, belongsTo, AsyncBelongsTo } from "@ember-data/model";
import type Entry from "wandertext/models/entry";
import type Place from "wandertext/models/place";
import type Contributor from "wandertext/models/contributor";
import type Text from "wandertext/models/text";

declare module "ember-data/types/registries/model" {
  export default interface ModelRegistry {
    flag: FlagModel;
  }
}

export default class FlagModel extends Model {
  @attr declare comment?: string;

  @attr({
    defaultValue() {
      return new Date().toISOString();
    },
  })
  declare createdAt: string;

  @attr() declare modifiedAt?: string;

  @belongsTo("contributor") declare creator: AsyncBelongsTo<Contributor>;

  @belongsTo("place") declare place: AsyncBelongsTo<Place>;

  @belongsTo("entry") declare entry: AsyncBelongsTo<Entry>;

  @belongsTo("text") declare text: AsyncBelongsTo<Text>;
}
