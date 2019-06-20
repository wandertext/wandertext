import Route from "@ember/routing/route";
import { RouteQueryManager } from "ember-apollo-client";
import query from "wandertext/gql/queries/texts";

export default class TextsIndexRoute extends Route.extend(RouteQueryManager) {
  model() {
    return this.get("apollo").watchQuery({ query }, "texts");
  }
}
