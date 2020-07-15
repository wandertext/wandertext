import { random } from "faker";

const textId = "baburnama-1530";

const entries = [
  {
    id: random.uuid(),
    properties: {
      page: 3,
      sequence: 2,
      special: "Agra specialty"
    },
    attestedName: "Agra",
    placeId: "agra",
    textId
  },
  {
    id: random.uuid(),
    properties: {
      page: 1,
      sequence: 3,
      special: "Belarusian specialty"
    },
    attestedName: "Беларусь",
    placeId: "belarus",
    textId
  },
  {
    id: random.uuid(),
    properties: {
      page: 2,
      sequence: 1,
      special: "Chile chili"
    },
    attestedName: "Chile",
    placeId: "chile",
    textId
  }
];

export default entries;
