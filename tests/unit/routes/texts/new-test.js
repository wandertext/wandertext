import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | texts/new', function() {
  setupTest();

  it('exists', function() {
    let route = this.owner.lookup('route:texts/new');
    expect(route).to.be.ok;
  });
});
