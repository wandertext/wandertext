import WorkbenchRoute from "wandertext/routes/workbench";
import { hash } from "rsvp";

export default class TextsTextEntriesIndexRoute extends WorkbenchRoute {
  async model() {
    const text = await this.modelFor("workbench/texts/text");
    const entries = await this.store.query("entry", {
      query: ref =>
        ref
          .where("text", "==", "baburnama-1530")
          .orderBy("properties.folio", "asc")
          .orderBy("properties.sequence", "asc")
          .limit(20)
    });
    return hash({
      text,
      entries
    });
  }
}
