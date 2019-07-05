import WorkbenchRoute from "wandertext/routes/workbench";
import { hash } from "rsvp";

export default class TextsTextEntriesIndexRoute extends WorkbenchRoute {
  async model() {
    const text = await this.modelFor("workbench/texts/text").sideload(
      "entries,entries.place"
    );
    return hash({
      text,
      entries: text.entries
    });
  }
}
