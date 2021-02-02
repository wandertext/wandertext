import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | texts', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:texts');
    assert.ok(route);
  });
});
