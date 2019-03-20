import Component from "@glimmer/component";
import { run } from "@ember/runloop";
import makeHistogram from "../make-histogram";

export default class TextEntriesComponent extends Component {
  constructor(...args) {
    super(...args);
    run.scheduleOnce("render", this, this.histogram);
  }

  histogram() {
    const id = "#text-entries";
    return makeHistogram({
      id,
      data: this.args.entries.map(entry => entry[this.args.entrySort]),
      width: document.querySelector(id).clientWidth,
      height: 0.4 * window.innerHeight,
      entrySort: this.args.entrySort
    });
  }
}
