import Model, { attr } from "@ember-data/model";

export default class TextModel extends Model {
  @attr("string") title;
}
