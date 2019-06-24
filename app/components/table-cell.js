import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

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

  @action
  updateChangeset(inputValue) {
    // This.currentValue is goofy but setting value as a getter
    // directly on the input freezes the input and doesn't let you
    // type in anything new.
    this.currentValue = inputValue;
    this.args.changeset.set(this.property, this.currentValue);
  }

  get changesetErrors() {
    const { error } = this.args.changeset;
    const property = this.property.replace(/^properties\./, "");
    if (property in error) {
      return error[property];
    }

    if ("properties" in error && property in error.properties) {
      return error.properties[property];
    }

    return false;
  }
}
