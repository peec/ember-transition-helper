'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    'ember-transition-helper': {
      filters: {
        'constructor.name': ['MouseEvent'],
        'renderer': true
      }
    }
  };
};
