import { discoverEmberDataModels } from "ember-cli-mirage";
import { createServer } from "miragejs";

export default function createMirageServer() {
  let finalConfig = {
    models: { ...discoverEmberDataModels() },
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
