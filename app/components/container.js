/* eslint unicorn/no-array-for-each: "off", unicorn/no-array-callback-reference: "off" */
import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { toLeft, toRight } from "ember-animated/transitions/move-over";

export default class ContainerComponent extends Component {
  @service menuState;

  @action rules({ newItems }) {
    if (newItems[0]) {
      return toLeft;
    }

    return toRight;
  }
}
