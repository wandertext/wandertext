import DS from "ember-data";

const { Transform } = DS;

export default class DateTransform extends Transform {
  deserialize(serialized) {
    if (serialized) {
      return new Date(serialized._seconds * 1000);
    }

    return null;
  }

  serialize(deserialized) {
    return deserialized;
  }
}
