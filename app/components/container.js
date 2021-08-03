/* eslint unicorn/no-array-for-each: "off", unicorn/no-array-callback-reference: "off" */
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { toLeft, toRight } from "ember-animated/transitions/move-over";

export default class ContainerComponent extends Component {
  @tracked
  showMenu = false;

  @action toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  @action
  *transition({ insertedSprites, removedSprites }) {
    yield insertedSprites.forEach(toLeft);
    yield removedSprites.forEach(toRight);
  }
}
