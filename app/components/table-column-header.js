import Component from "@glimmer/component";
import { htmlSafe } from "@ember/string";

export default class TableColumnHeaderComponent extends Component {
  get cellWidth() {
    return htmlSafe("width: " + this.args.columnContent.width + ";");
  }

  get isPlace() {
    return this.args.columnContent.valuePath === "place";
  }
}
