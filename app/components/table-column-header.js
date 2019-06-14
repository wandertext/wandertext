import Component from "@glimmer/component";

export default class TableColumnHeaderComponent extends Component {
  get isPlace() {
    return this.args.columnContent.valuePath === "place";
  }
}
