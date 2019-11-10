import Route from "@ember/routing/route";
import { queryManager } from "ember-apollo-client";

export default class WorkbenchRoute extends Route {
  @queryManager apollo;
}
