export default function() {
  // These comments are here to help you get started. Feel free to delete them.
  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  this.urlPrefix = "http://localhost:4040"; // Make this `http://localhost:8080`, for example, if your API is on a different server
  // this.urlPrefix = "http://api.wandertext.space"; // Make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = ""; // Make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing
  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */

  this.resource("entries");
  this.resource("contributors");
  this.resource("texts");
  this.resource("places");

  this.passthrough("https://wandertext-github-gatekeeper.herokuapp.com/**");
  this.passthrough("https://api.github.com/**");
}
