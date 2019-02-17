import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | text', function() {
  setupTest();

  it('exists', function() {
    let route = this.owner.lookup('route:text');
    expect(route).to.be.ok;
  });
});
