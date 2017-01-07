import Ember from 'ember';
import FindQueryMixin from 'ember-emberfire-find-query/mixins/find-query';
import { module, test } from 'qunit';

module('Unit | Mixin | find query');

// Replace this with your real tests.
test('it works', function(assert) {
  let FindQueryObject = Ember.Object.extend(FindQueryMixin);
  let subject = FindQueryObject.create();
  assert.ok(subject);
});
