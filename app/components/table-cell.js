import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";

export default class TableCellComponent extends Component {
  @service currentContributor;

  // This.args.entry is a regular Entry
  // this.args.column has a label, a valuePath, and a property object
  // with name, type, help, owner, readOnly, inputLabel

  @tracked isPlace = false;

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
