import Component from "@glimmer/component";
import { action } from "@ember/object";
import {
  validateNumber,
  validatePresence
} from "ember-changeset-validations/validators";

export default class EntryGridChComponent extends Component {
  columns = ["attestedName", "properties.page", "properties.special"];

  @action
  beTrue() {
    return true;
  }

  @action
  async save(changeset) {
    const snapshot = changeset.snapshot();
    try {
      await changeset.validate();
      if (changeset.get("isValid")) {
        console.log("executing");
        return changeset.execute();
      }
    } catch (error) {
      console.log(error);
      changeset.restore(snapshot);
    }
  }

  @action
  validateProperty(changeset, property) {
    return changeset.validate(property);
  }

  EntryValidations = {
    attestedName: validatePresence(false),
    "properties.page": validateNumber(true),
    "properties.special": validatePresence(true)
  }

  /*get EntryValidations() {
    const validator = {
      // attestedName: validatePresence(false)
      // attestedName: validateLength({ is: 5 })
    };

    this.args.text.entryProperties.forEach(property => {
      const validations = [];
      if (property.type === "number") {
        // Validations.push(validateNumber({ allowString: true }));
        // validations.push(validateNumber({ integer: true }));
        // validations.push(validateNumber(true));
        validator[`properties.${property.name}`] = validateNumber({ integer: true });
      }

      // if (!property.nullable) {
      //   validations.push(validatePresence(true));
      // }

      // if (validations.length > 1) {
      //   validator[`properties.${property.name}`] = validations;
      //   // validator.properties[property.name] = validations;
      // } else if (validations.length === 1) {
      //   validator[`properties.${property.name}`] = validations[0];
      //   // validator.properties[property.name] = validations[0];
      // }
    });

    return validator;
  }
  */
}
