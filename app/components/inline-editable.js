import Component from "@glimmer/component";

export default class InlineEditableComponent extends Component {
  get valueIsEmpty() {
    return !this.args.value;
  }
}
