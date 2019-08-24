import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import { queryManager } from "ember-apollo-client";

export default class WorkbenchRoute extends Route.extend(
  AuthenticatedRouteMixin
) {
  @queryManager apollo;
}
