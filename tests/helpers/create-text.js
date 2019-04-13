import faker from "faker";

export default function createText(store) {
  const name = faker.commerce.productName();
  return store.createRecord("text", {
    name,
    slug: `${faker.helpers.slugify(name)}-${faker.random.number()}`,
    entryProperties: [
      { name: faker.lorem.word() },
      { name: faker.lorem.word() },
      { name: faker.lorem.word() }
    ],
    entrySort: faker.lorem.word()
  });
}
