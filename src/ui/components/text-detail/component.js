import Component from "@ember/component";
import { computed } from "@ember-decorators/object";
import { inject as service } from "@ember-decorators/service";

export default class TextDetailComponent extends Component {
  @service data;

  instances = [];

  @computed("instances")
  get instancesCount() {
    return this.instances.length;
  }

  async didInsertElement() {
    const text = await this.data.getTextBySlug(this.get("slug"));
    this.set("text", text);
    const instances = await this.data.getInstancesByText(text.id);
    this.set("instances", instances);
    // Console.log(instances);
  }
}
