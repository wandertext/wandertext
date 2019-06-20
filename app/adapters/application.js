import DS from "ember-data";
import config from "wandertext/config/environment";

export default class ApplicationAdapter extends DS.JSONAPIAdapter {
  host = config.backendHost;
}
