import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | transition to');

test('go back and forth', function(assert) {
  visit('/');

  click('a[name="test-click"]');

  andThen(function() {
    assert.equal(currentURL(), '/test/some-arg');

    click('a[name="go-back"]');

    andThen(function() {
      assert.equal(currentURL(), '/');
    });
  });
});

test('pass query parameter', function(assert) {
  visit('/');

  click('.test-query-params');

  andThen(function() {
    assert.equal(currentURL(), '/tabs?tab=X');
  });
});
