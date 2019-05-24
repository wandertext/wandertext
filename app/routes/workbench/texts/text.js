import Route from "@ember/routing/route";
import { task } from "ember-concurrency-decorators";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default class TextsTextRoute extends Route.extend(
  AuthenticatedRouteMixin
) {
  model({ slug }) {
    return this.textTask.perform(slug);
  }

  @task
  textTask = function*(slug) {
    const texts = yield this.store.loadRecords("text", {
      filter: { slug }
    });
    return texts.firstObject;
  };
}
