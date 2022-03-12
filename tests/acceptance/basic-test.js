import { module, test } from 'qunit';
import { currentURL, click, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | basic', function (hooks) {
  setupApplicationTest(hooks);

  test('single parameter', async function (assert) {
    await visit('/');
    await click('a[data-test-id="transition-to-single-1"]');
    assert.strictEqual(currentURL(), '/single/1');
    await click('a[data-test-id="transition-to-single-2"]');
    assert.strictEqual(currentURL(), '/single/2');
  });

  test('two parameters', async function (assert) {
    await visit('/');
    await click('a[data-test-id="transition-to-double"]');
    assert.strictEqual(currentURL(), '/double/x/y');
    await visit('/');
    assert.strictEqual(currentURL(), '/');
  });

  test('pass query parameter', async function (assert) {
    await visit('/');
    await click('a[data-test-id="transition-to-foo"]');
    assert.strictEqual(currentURL(), '/tabs?tab=foo'); // Note: real browser URL may have "#" appended
    await click('a[data-test-id="transition-to-bar"]');
    assert.strictEqual(currentURL(), '/tabs?tab=bar'); // Note: real browser URL may have "#" appended
    await click('a[data-test-id="transition-to-preventDefault"]');
    assert.strictEqual(currentURL(), '/tabs?tab=preventDefault');
    let text = document.querySelector(
      '[data-test-id="tab-query-param"]'
    ).innerText;
    assert.strictEqual(text, 'preventDefault');
  });
});
