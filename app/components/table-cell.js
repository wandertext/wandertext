import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";

export default class TableCellComponent extends Component {
  @service currentContributor;

  @tracked currentValue = this.args.changeset.get(this.property);

  get classes() {
    return `p-1 cell-${this.property.replace(
      ".",
      "-"
    )} cell-id-${this.args.changeset.get("id")}`;
  }

  get isPlace() {
    return this.args.column.valuePath === "place";
  }

  get isDate() {
    return /(creat|modifi)edOn/.test(this.args.column.valuePath);
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
