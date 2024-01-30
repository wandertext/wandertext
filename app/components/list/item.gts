import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { Marker } from "wandertext";
import Contributor from "wandertext/models/contributor";
import Entry from "wandertext/models/entry";
import Place from "wandertext/models/place";
import Text from "wandertext/models/text";
import Icon from "../icon";
import Disclosure from "../disclosure";
import InfoBox from "../info-box/";
import InfoBoxIconBox from "../info-box/icon-box";
import Map from "../map";
import { cssTransition } from "ember-css-transitions";

interface ListItemComponentSignature {
  Element: HTMLLIElement;
  Args: {
    item: Text | Place | Contributor | Entry;
    linkToRoute: string; // Probably wrong.
  };
}

export default class ListItemComponent extends Component<ListItemComponentSignature> {
  @tracked
  mapVisible = false;

  get markerBounds() {
    const markers = this.markers;
    if (markers && markers.length > 0) {
      const coordinates = markers.filter((marker: Marker): marker is Marker =>
        Boolean(marker.latitude && marker.longitude)
      );
      const bounds: [number, number][] = coordinates.map(marker => [
        1.1 * marker.latitude,
        1.1 * marker.longitude,
      ]);

      return bounds;
    }
  }

  get markers() {
    const model = this.args.item;
    if (model instanceof Text) {
      return [...new Set(model.entries.map(entry => entry.place))] as Marker[];
    }

    // if (model instanceof Place) {
    //   return [model];
    // }

    return [];
  }

  @action
  toggleMap() {
    this.mapVisible = !this.mapVisible;
  }
  <template>
    <li data-test-list-item={{@item.name}}
      class="
      w-full
      flex
      flex-col"
      >
      <Disclosure as |disclosure|>
          <InfoBox @item={{@item}} @linkToRoute={{@linkToRoute}}
            class={{if this.mapVisible "bg-columbiaBlue"}}>
            <InfoBoxIconBox>
              <disclosure.Button data-test-list-item-map-button={{@item.id}}
                class="flex flex-row h-full items-center px-2 space-x-2 hover:shadow">
                  <Icon @icon="map"/>
                {{#if disclosure.isOpen}}
                  <Icon @icon="caret-up"/>
                {{else}}
                  <Icon @icon="caret-down"/>
                {{/if}}
              </disclosure.Button>
            </InfoBoxIconBox>
          </InfoBox>
        <disclosure.Panel
          class="border-t-primary border-t-2 w-full h-[60vh] bg-primary"
            {{cssTransition
              enterClass="opacity-0, max-h-0"
              enterActiveClass="transition-all duration-500 ease-in-out"
              enterToClass="opacity-100 max-h-60"
              leaveClass="opacity-100 max-h-60"
              leaveActiveClass="transition-all duration-500 ease-in-out"
              leaveToClass="opacity-100 max-h-0"
            }}
          data-test-list-item-map-container>
            <Map @bounds={{this.markerBounds}} as |map|>
              {{#each this.markers as |marker|}}
                <map.Marker @placeName={{marker.name}} @lat={{marker.latitude}} @lng={{marker.longitude}} />
              {{/each}}
            </Map>
        </disclosure.Panel>
      </Disclosure>
    </li>
  </template>
}

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    ListItem: typeof ListItemComponent;
    "List::Item": typeof ListItemComponent;
    "list/item": typeof ListItemComponent;
  }
}
