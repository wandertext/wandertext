import { computed } from "@ember/object";
import GitHubUserAdapter from "ember-data-github/adapters/github-user";
import DataAdapterMixin from "ember-simple-auth/mixins/data-adapter-mixin";

export default GitHubUserAdapter.extend(DataAdapterMixin, {
  headers: computed("session.data.authenticated.token", function() {
    const headers = {};
    if (this.session.isAuthenticated) {
      headers.Authorization = `Bearer ${this.session.data.authenticated.token}`;
    }

    return headers;
  })
});
