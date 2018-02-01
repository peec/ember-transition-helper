import transformQueryParams from 'dummy/utils/transform-query-params';
import { module, test } from 'qunit';

module('Unit | Utility | transform query params');

[{
  name: 'Returns query params in expected format',
  input: [{
    isQueryParams: true,
    values: {
      x: 1,
      y: 2
    }
  }],
  expected: [{
    queryParams: {
      x: 1,
      y: 2
    }
  }]
}, {
  name: 'Passes other arguments (even non-object ones) through without modification',
  input: [{
    x: 1,
    y: 2
  }, 'id-123', undefined],
  expected: [{
    x: 1,
    y: 2
  }, 'id-123', undefined]
}, {
  name: 'Passes non-array arguments through without modification',
  input: "some-id",
  expected: "some-id"
}].forEach(scenario => {
  test(scenario.name, function(assert) {
    const actual = transformQueryParams(scenario.input);
    assert.deepEqual(actual, scenario.expected);
  });
});
