import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class TableCellComponent extends Component {
  @service currentContributor;

  // This.args.entry is a regular Entry
  // this.args.column has a label, a valuePath, and a property object
  // with name, type, help, owner, readOnly, inputLabel

  get isPlace() {
    return this.args.column.valuePath === "place";
  }

  property = this.args.column.valuePath;

  get isDisabled() {
    if (this.args.column.property) {
      return (
        this.args.column.property.readOnly ||
        (this.args.column.property.owner &&
          this.args.column.property.owner !==
            this.currentContributor.contributor.id)
      );
    }

    return false;
  }
}
