import FirestoreAdapter from "emberfire/adapters/firestore";

export default class ApplicationAdapter extends FirestoreAdapter {
  enablePersistence = true;

  persistenceSettings = { synchronizeTabs: true };
}
