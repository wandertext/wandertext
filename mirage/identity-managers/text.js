import { lorem } from "faker";

export default class {
  /**
   * Returns an unique identifier.
   *
   * @method fetch
   * @param {Object} data Records attributes hash
   * @return {String} Unique identifier
   * @public
   */
  fetch() {
    let uuid = lorem.word();
    while (this.ids.has(uuid)) {
      uuid = lorem.word();
    }

    this.ids.add(uuid);

    return uuid;
  }

  /**
   * Register an identifier.
   * Must throw if identifier is already used.
   *
   * @method set
   * @param {String|Number} id
   * @public
   */
  set(id) {
    if (this.ids.has(id)) {
      throw new Error(`ID ${id} has already been used.`);
    }

    this.ids.add(id);
  }

  /**
   * Reset identity manager.
   *
   * @method reset
   * @public
   */
  reset() {
    this.ids.clear();
  }

  constructor() {
    this.ids = new Set();
  }
}
