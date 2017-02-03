import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | transition to');

test('visiting /transition-to', function(assert) {
  visit('/');

  click('a[name="test click"]');

  andThen(function() {
    assert.equal(currentURL(), '/test/some-arg');

    click('a[name="go back"]');

    andThen(function() {
      assert.equal(currentURL(), '/');
    });
  });
});
