import createGraphQLHandler from "ember-cli-mirage-graphql/handler";
import schema from "wandertext/gql/schema.graphql";

export default createGraphQLHandler(schema /* options = {} */);
