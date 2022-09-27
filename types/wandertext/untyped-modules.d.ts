declare module "ember-promise-modals" {
  export default interface Modals {
    open: (content: string) => void;
  }
}

declare module "ember-leaflet" {
  export interface MarkerLayer {
    lat: number;
    lng: number;
  }
}
