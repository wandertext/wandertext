import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class ContributorProfileComponent extends Component {
  @service session;

  isMe() {
    return (
      this.args.model.username ===
      this.session.data.authenticated.githubUsername
    );
  }
}
