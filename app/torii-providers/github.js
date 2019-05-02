import GitHubOAuth2Provider from "torii/providers/github-oauth2";
import ajax from "ember-fetch/ajax";
import config from "wandertext/config/environment";

export default GitHubOAuth2Provider.extend({
  async open() {
    const { authorizationCode, provider } = await this._super();
    const gatekeeperURL =
      config.torii.providers["github-oauth2"].tokenExchangeUri;
    const response = await ajax(`${gatekeeperURL}/${authorizationCode}`);
    return { provider, token: response.token };
  }
});
