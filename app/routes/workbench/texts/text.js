import Route from "@ember/routing/route";
import { RouteQueryManager } from "ember-apollo-client";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import query from "wandertext/gql/queries/text";

export default class TextsTextRoute extends Route.extend(
  AuthenticatedRouteMixin,
  RouteQueryManager
) {
  model({ id }) {
    const variables = { id };
    return this.get("apollo").watchQuery({ query, variables }, "text");
  }
}
