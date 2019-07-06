const admin = require("firebase-admin");
const functions = require("firebase-functions");

exports.updateEntry = functions.firestore
  .document("entries/{entryId}")
  .onUpdate(change => {
    const previousValue = change.before.data();
    const newValue = change.after.data();
    // If the times are the same, then something else has changed.
    // That means update the times. The next time through, it will
    // simply resolve quietly.
    if (previousValue.modifiedOn._seconds === newValue.modifiedOn._seconds) {
      const { ref } = change.after;
      const now = admin.firestore.Timestamp.now();
      previousValue.archivedOn = now;
      return Promise.all([
        ref
          .collection("revisions")
          .doc()
          .set(previousValue),
        ref.set({ modifiedOn: now }, { merge: true })
      ]);
    }

    return Promise.resolve();
  });

exports.updatePlace = functions.firestore
  .document("places/{placeId}")
  .onUpdate(change => {
    const previousValue = change.before.data();
    const newValue = change.after.data();
    if (previousValue.modifiedOn._seconds === newValue.modifiedOn._seconds) {
      const { ref } = change.after;
      const now = admin.firestore.Timestamp.now();
      previousValue.archivedOn = now;
      return Promise.all([
        ref
          .collection("revisions")
          .doc()
          .set(previousValue),
        ref.set({ modifiedOn: now }, { merge: true })
      ]);
    }

    return Promise.resolve();
  });
