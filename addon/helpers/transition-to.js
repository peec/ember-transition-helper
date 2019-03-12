import { getOwner } from '@ember/application';
import Helper from '@ember/component/helper';
import { assert } from '@ember/debug';
import { computed } from '@ember/object';
import _transformQueryParams from '../utils/transform-query-params';
import _filterArgs from '../utils/filter-args';

export default Helper.extend({
  router: computed(function() {
    return getOwner(this).lookup('router:main');
  }).readOnly(),
  
  filters: computed(function() {
    const ENV = getOwner(this).resolveRegistration('config:environment');
    const config = ENV['ember-transition-helper'];
    return config.filters || [];
  }).readOnly(),

  compute([routeName, ...params]) {
    const router = this.get('router');
    const filters = this.get('filters');
    assert('[ember-transition-helper] Unable to lookup router', router);
    return function(...invocationArgs) {
      const filteredArgs = _filterArgs(filters, invocationArgs);
      const args = params.concat(filteredArgs);
      const transitionArgs = args.length ? [routeName, ...args] : [routeName];
      router.transitionTo(..._transformQueryParams(transitionArgs));
      return args;
    };
  }
});
