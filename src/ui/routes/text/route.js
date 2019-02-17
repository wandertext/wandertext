import Route from '@ember/routing/route';

export default class TextRoute extends Route {
  model({ slug }) {
    return {
      title: `Title ${slug}`,
      body: "This is the body."
    };
  }
}
