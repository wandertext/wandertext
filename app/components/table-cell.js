import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";
import { htmlSafe } from "@ember/string";

export default class TableCellComponent extends Component {
  @service notify;

  @service currentContributor;

  @tracked validationClass = "";

  @tracked currentValue = this.args.entry[this.property];

  get classes() {
    return `cell-${this.property.replace(".", "-")} cell-id-${
      this.args.entry.id
    }`;
  }

  get cellWidth() {
    return htmlSafe("width: " + this.args.column.width + ";");
  }

  get isPlace() {
    return this.args.column.valuePath === "place";
  }

  get isDate() {
    return /(creat|modifi)edOn/.test(this.args.column.valuePath);
  }

  property = this.args.column.valuePath;

  get inputType() {
    if (
      this.args.column.property &&
      this.args.column.property.type === "number"
    ) {
      return "number";
    }

    return "text";
  }

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

  get isMappable() {
    return this.args.entry.place.latitude && this.args.entry.place.longitude;
  }
}
