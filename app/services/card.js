import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class CardService extends Service {
  @tracked logo;

  @tracked title;

  constructor(...args) {
    super(...args);
    this.reset();
  }

  waw =
    "<svg style='width:24px;height:24px' viewbox='0 0 24 24'><path fill='#0033a0' d='M17.4,11.5c-0.3,1.8-1.2,4.2-2.9,7.2c-0.4,0.8-1.2,1.4-2.3,1.6c-0.9,0.2-1.9,0.5-2.8,0.7c-0.7,0.2-1.8,0.5-3.2,0.9 c-0.3,0-0.5-0.1-0.6-0.3c0-0.3,0.2-0.5,0.7-0.8c1.5-0.9,3-1.7,4.4-2.6c1.6-1,3-2.1,4.1-3.2c0.3-0.4,0.4-1.1,0.3-1.8 c-0.2-0.5-0.5-0.9-0.8-1.1c-0.4,0.1-0.7,0.1-1.1,0.1c-1.3,0-2.3-0.5-3-1.4C10.1,10.4,10,10,10,9.5c0-0.5,0.2-1.2,0.5-1.9 c0.3-0.6,0.6-1.2,0.8-1.8s0.5-1.3,0.7-2.1c0.4-0.8,0.9-1.3,1.6-1.6c1.2-0.2,2.2,0.3,2.9,1.5c0.8,1.4,1.2,3,1.2,4.9 C17.8,9.4,17.7,10.4,17.4,11.5z'/></svg>";

  vov =
    "<svg style='width:24px;height:24px' viewbox='0 0 24 24'><path fill='#0033a0' d='M13,18.6c-0.1-1-0.1-2-0.1-3.1c-0.1-0.9-0.1-1.7-0.1-2.6l-0.1-3c0-0.3-0.1-0.8-0.4-0.8c-0.4,0-0.7-0.3-1-0.3 c-0.9-0.3-1.7-0.6-2.1-1.6C9,6.8,9.1,5.9,9.1,5.4c0-0.6,0.2-1.2,0.3-1.8c0.1-0.2,0.1-0.4,0.2-0.6c0.3-0.5,0.5-0.5,1-0.2 c0.2,0.1,0.4,0.5,0.7,0.6c0.4,0.2,0.8,0.4,1.2,0.6c1.5,0.6,2.3,1.4,1.9,2.9c-0.1,0.2-0.1,0.6-0.2,0.8c-0.3,1.1-0.6,2.5-0.3,3.8 l0.1,0.7c0.1,0.5,0.2,1,0.3,1.5c0.1,0.6,0.2,1.1,0.3,1.7s0.3,1.2,0.3,1.8c0.1,0.6,0,1.2-0.1,1.9c-0.1,0.6-0.3,1.2-0.6,1.9 c-0.1,0.3-0.2,0.6-0.5,0.8c-0.5,0.3-0.6,0.1-0.6-0.5c0-0.4,0-0.8,0-1.2V18.6z'/></svg>";

  setTitle(titleThing) {
    let { title } = this;
    if (titleThing.htmlTitle) {
      title = titleThing.htmlTitle;
    } else if (titleThing.title) {
      title = titleThing.title;
    } else if (titleThing.name) {
      title = titleThing.name;
    }

    this.title = title;
  }

  reset() {
    this.title = "Wandertext";
    this.logo = this.waw;
  }
}