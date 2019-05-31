import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { capitalize } from "@ember/string";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class TextEntryListComponent extends Component {
  @service store;

  @tracked sorts = [];

  @tracked columns = [
    {
      cellComponent: "table-edit",
      label: "Attested Name",
      valuePath: "attestedName"
    },
    {
      cellComponent: "table-place",
      label: "Linked Place",
      valuePath: "place"
    }
  ];

  @tracked entries = this.args.text.entries;

  @tracked isShowingModal = false;

  @tracked modalPlace = null;

  @action
  toggleModal() {
    this.isShowingModal = !this.isShowingModal;
  }

  @action
  async showModal(e) {
    this.isShowingModal = true;
    this.modalPlace = await this.store.loadRecord(
      "place",
      Number(e.path[0].dataset.placeid)
    );
  }

  constructor(...args) {
    super(...args);
    this._buildColumns(this.args.text);
    this._buildSorts(this.args.text);
  }

  _buildColumns(text) {
    text.entryProperties.forEach(propObj => {
      const label = propObj.inputLabel || capitalize(propObj.name);
      const valuePath = `properties.${propObj.name}`;
      const cellComponent = propObj.readOnly ? "table-readonly" : "table-edit";
      this.columns.pushObject({ valuePath, label, cellComponent });
    });
    this.columns.pushObject({
      cellComponent: "table-date",
      label: "Created On",
      valuePath: "createdOn"
    });
  }

  _buildSorts(text) {
    text.entrySort.forEach(sort => {
      this.sorts.pushObject({
        valuePath: `properties.${sort}`,
        isAscending: true
      });
    });
  }
}
