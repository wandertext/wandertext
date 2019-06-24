import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { capitalize } from "@ember/string";
import { action } from "@ember/object";
import {
  validateNumber,
  validatePresence
} from "ember-changeset-validations/validators";

export default class EntryGridComponent extends Component {
  @tracked sorts = [];

  @tracked activeEntry = null;

  @tracked columns = [
    {
      label: "Attested Name",
      valuePath: "attestedName"
    },
    {
      label: "Linked Place",
      valuePath: "place"
    }
  ];

  @tracked isShowingModal = false;

  @tracked modalPlace = null;

  @action
  toggleModal() {
    this.isShowingModal = !this.isShowingModal;
  }

  @action
  async validateProperty(changeset, property) {
    const validate = await changeset.validate(property);
    console.log(
      "validating",
      property,
      "is invalid:",
      changeset.get("isInvalid"),
      changeset.get("errors")
    );
    // Return changeset.validate(property);
    return validate;
  }

  @action
  async showModal(data) {
    this.isShowingModal = true;
    this.modalPlace = data;
  }

  @action
  setActiveEntry(entry) {
    if (
      this.activeEntry !== null &&
      this.activeEntry !== entry &&
      this.activeEntry.get("hasDirtyAttributes")
    ) {
      this.activeEntry.save();
    }

    this.activeEntry = entry;
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
      this.columns.pushObject({ valuePath, label, property: propObj });
    });
    this.columns.pushObject({
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

  get EntryValidations() {
    const validator = {
      attestedName: validatePresence(true)
    };

    this.args.text.entryProperties.forEach(property => {
      const validations = [];
      if (property.type === "number") {
        // validations.push(validateNumber({ allowString: true }));
        // validations.push(validateNumber({ integer: true }));
        validations.push(validateNumber(true));
      }

      if (!property.nullable) {
        validations.push(validatePresence(true));
      }

      if (validations.length > 1) {
        validator[`properties.${property.name}`] = validations;
      } else if (validations.length === 1) {
        validator[`properties.${property.name}`] = validations[0];
      }
    });

    return validator;
  }
}
