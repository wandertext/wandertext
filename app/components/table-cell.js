import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action, get } from "@ember/object";
import { inject as service } from "@ember/service";
import { htmlSafe } from "@ember/string";
import { task } from "ember-concurrency";

export default class TableCellComponent extends Component {
  @service notify;

  @service currentContributor;

  @tracked validationClass = "";

  @tracked currentValue = this.args.changeset.get(this.property);

  get classes() {
    return `cell-${this.property.replace(
      ".",
      "-"
    )} cell-id-${this.args.changeset.get("id")}`;
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

  constructor(...args) {
    super(...args);
    if (this.isPlace) {
      this.fetchPlace.perform();
    }
  }

  @action
  validate() {
    this.validationClass = "";
    if (get(this.args.changeset.error, this.property)) {
      get(this.args.changeset.error, this.property).validation.forEach(
        message =>
          this.notify.warning(message, {
            id: `${this.args.changeset.get("id")}-${message}`
          })
      );
      this.validationClass = "warning";
    }
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
            this.currentContributor.contributor.wandertextId)
      );
    }

    return false;
  }

  @tracked isMappable = false;

  @tracked place = null;

  @task(function*() {
    this.place = yield this.args.changeset.get("place");
    if (this.place.latitude && this.place.longitude) {
      this.isMappable = true;
    }
  })
  fetchPlace;
}
