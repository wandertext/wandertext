import { discoverEmberDataModels } from "ember-cli-mirage";
import { createServer } from "miragejs";

export default function (config) {
  let finalConfig = {
    ...config,
    models: { ...discoverEmberDataModels(), ...config.models },
    routes() {
      this.namespace = "/api";
      this.resource("contributor");
      this.resource("entry-property");
      this.resource("entry");
      this.resource("flag");
      this.resource("place");
      this.resource("text");
    },
  };

  return createServer(finalConfig);
}
