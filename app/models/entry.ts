import Model, {
  attr,
  hasMany,
  belongsTo,
  AsyncHasMany,
  AsyncBelongsTo,
} from "@ember-data/model";
import type Contributor from "wandertext/models/contributor";
import type Place from "wandertext/models/place";
import type Flag from "wandertext/models/flag";
import type Text from "wandertext/models/text";

declare module "ember-data/types/registries/model" {
  export default interface ModelRegistry {
    entry: EntryModel;
  }
}

export default class EntryModel extends Model {
  @attr declare properties?: string;

  @attr declare attestedName?: string;

  @attr declare note?: string;

  // Is this a lazy loaded id for the place?
  @attr declare placeId?: string;

  @attr("date", {
    defaultValue() {
      return new Date();
    },
  })
  declare createdAt: Date;

  @attr("date") declare modifiedAt?: Date;

  @hasMany("contributor") declare contributor: AsyncHasMany<Contributor>;

  @hasMany("flag") declare flag: AsyncHasMany<Flag>;

  @belongsTo("place") declare place: AsyncBelongsTo<Place>;

  @belongsTo("text") declare text: AsyncBelongsTo<Text>;
}
