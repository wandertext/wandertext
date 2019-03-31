import Component from "@glimmer/component";

export default class CreateButtonComponent extends Component {
  get class() {
    return ["create-button", this.args.classes].join(" ");
  }
}
