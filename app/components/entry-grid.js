import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";
import { capitalize } from "@ember/string";
import { action } from "@ember/object";
import {
  validateNumber,
  validatePresence
} from "ember-changeset-validations/validators";

export default class EntryGridComponent extends Component {
  @service notify;

  @service currentContributor;

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
    return changeset.validate(property);
  }

  @action
  async showModal(data) {
    this.isShowingModal = true;
    this.modalPlace = data;
  }

  @action
  setActiveEntry(entry) {
    if (this.activeEntry !== null && this.activeEntry !== entry) {
      this._save(this.activeEntry);
    }

    this.activeEntry = entry;
  }

  constructor(...args) {
    super(...args);
    this._buildColumns(this.args.text);
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

  async _save(changeset) {
    const snapshot = changeset.snapshot();
    try {
      await changeset.validate();
      if (changeset.get("isValid")) {
        await changeset.save();
        return this.notify.success(
          `Entry “${changeset.get("attestedName")}” (re-)saved.`
        );
      }

      throw changeset.errors;
    } catch (error) {
      error.forEach(message => this.notify.error(message.validation[0]));
      changeset.restore(snapshot);
    }
  }

  entryProps = this.args.text.entryProperties.toArray();

  get EntryValidations() {
    const validations = {
      attestedName: validatePresence(true)
    };
    this.entryProps.forEach(property => {
      const validators = [];
      // Skip read only properties and
      // properties that aren't owned by the current user
      if (
        !property.readOnly &&
        (property.owner === null ||
          property.owner === undefined ||
          property.owner === this.currentContributor.contributor.id)
      ) {
        if (!property.nullable) {
          validators.push(validatePresence(true));
        }

        if (property.type === "number") {
          validators.push(validateNumber(true));
        }
      }

      validations[`properties.${property.name}`] = validators;
    });
    return validations;
  }
}
