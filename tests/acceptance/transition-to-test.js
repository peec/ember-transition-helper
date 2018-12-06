import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | transitio to', function(hooks) {
  setupApplicationTest(hooks);

  test('go back and forth', async function (assert) {
    await visit('/');

    await click('a[name="test-click"]');

    assert.equal(currentURL(), '/test/some-arg');

    await click('a[name="go-back"]');

    assert.equal(currentURL(), '/');
  });

  test('pass query parameter', async function (assert) {
    await visit('/');

    await click('.test-query-params');

    assert.equal(currentURL(), '/tabs?tab=X');
  });
});
