export default function(server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  const muziejus = server.create("contributor", {
    username: "muziejus",
    admin: true
  });
  const texts = server.createList("text", 3);
  texts.forEach(text => {
    text.contributors = [muziejus];
  });
}
