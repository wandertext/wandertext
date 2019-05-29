import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { capitalize } from "@ember/string";

export default class TextEntryListComponent extends Component {
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
