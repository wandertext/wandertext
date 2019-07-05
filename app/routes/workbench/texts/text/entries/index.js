import WorkbenchRoute from "wandertext/routes/workbench";
import { hash } from "rsvp";

export default class TextsTextEntriesIndexRoute extends WorkbenchRoute {
  async model() {
    const text = await this.modelFor("workbench/texts/text").sideload(
      "entries,entries.place"
    );
    const entries = text.entries.sortBy(
      ...text.entrySort.map(property => `properties.${property}`)
    );
    return hash({
      text,
      entries
    });
  }
}
