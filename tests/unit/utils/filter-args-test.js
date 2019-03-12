import filterArgs from 'dummy/utils/filter-args';
import { module, test } from 'qunit';

module('Unit | Utility | filter-args');

[{
  name: 'Filters correct params',
  filters: {
    'element.name': ['MouseEvent'],
    renderer: true
  },
  args: [
    {
      renderer: {}
    },
    {
      element: {
        name: 'SomeModel'
      }
    },
    {
      element: {
        name: 'MouseEvent'
      }
    },
    {
      id: 4
    },
    {
      queryParams: {
        x: 1,
        y: 2
      }
    }
  ],
  expected: [
    {
      element: {
        name: 'SomeModel'
      }
    },
    {
      id: 4
    },
    {
      queryParams: {
        x: 1,
        y: 2
      }
    }
  ]
}].forEach(scenario => {
  test(scenario.name, function(assert) {
    const actual = filterArgs(scenario.filters, scenario.args);
    assert.deepEqual(actual, scenario.expected);
  });
});
