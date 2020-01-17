import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import mutation from "wandertext/gql/mutations/edit-entry.graphql";

export default class EntryNewComponent extends Component {
  @service apollo;

  @service entriesEnvironment;

  get columns() {
    if (this.entriesEnvironment.currentText === this.args.text.id) {
      return this.entriesEnvironment.columns;
    }

    return this.entriesEnvironment.buildColumns(this.args.text);
  }

  constructor(...args) {
    super(...args);
    const newModel = { attestedName: "", place: "", properties: {} };
    // For (const column of this.args.columns.filter(column =>
    //   column.valuePath.startsWith("properties.")
    // )) {
    //   newModel.properties[column.valuePath.replace("properties.", "")] = null;
    // }

    this.newEntry = newModel;
    this.rows = [newModel];
  }

  @action
  focusIn() {
    // This action has to stay here because of focusIn on the TableCell
    // component.
    return true;
  }

  @action
  createEntry() {
    const variables = {
      contributorId: "Z4aKFSu4FNYvB17YJUOx0hjlPH52",
      entryJSON: JSON.stringify({
        attestedName: "BazmadorfCorso",
        properties: { page: 1 },
        textId: "baburnama-1530",
        placeId: "agra"
      })
    };
    return this.apollo.mutate({ mutation, variables }, "entry");
  }
}
