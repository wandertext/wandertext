import Route from "@ember/routing/route";
import { queryManager } from "ember-apollo-client";
import query from "wandertext/gql/queries/text.graphql";

export default class TextRoute extends Route {
  @queryManager apollo;

  model({ id }) {
    const variables = { id };
    return this.apollo.watchQuery({ query, variables }, "text");
  }
}
