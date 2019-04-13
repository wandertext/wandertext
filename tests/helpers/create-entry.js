import faker from "faker";

export default function createEntry(store, text) {
  const properties = {};
  text.entryProperties.forEach(property => {
    properties[property] = `${property} ${faker.random.number()}`;
  });
  const entry = store.createRecord("entry", {
    text,
    properties,
    attestedName: faker.address.city()
  });
  entry.set(text.entrySort, faker.random.number());
  return entry;
}
