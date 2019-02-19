import Component from "@ember/component";
import { inject as service } from "@ember-decorators/service";

export default class TextDetailComponent extends Component {
  @service data;

  async didInsertElement() {
    this.set("text", await this.data.getTextBySlug(this.get("slug")));
  }
}
