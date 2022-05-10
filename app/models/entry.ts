import Model, {
  attr,
  hasMany,
  belongsTo,
  AsyncHasMany,
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

  @attr declare attestedName: string;

  @attr declare note?: string;

  // Is this a lazy loaded id for the place?
  //@attr declare placeId?: string;

  @attr({
    defaultValue() {
      return new Date().toISOString();
    },
  })
  declare createdAt: string;

  @attr() declare modifiedAt?: string;

  @hasMany("contributor") declare contributors: AsyncHasMany<Contributor>;

  @hasMany("flag") declare flags: AsyncHasMany<Flag>;

  @belongsTo("place", { async: false }) declare place: Place;

  @belongsTo("text", { async: false }) declare text: Text;

  get name() {
    return this.attestedName;
  }
}
