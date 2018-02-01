import Ember from 'ember';
import _transformQueryParams from '../utils/transform-query-params';

export default Ember.Helper.extend({
  router: Ember.computed(function() {
    return Ember.getOwner(this).lookup('router:main');
  }).readOnly(),

  compute([routeName, ...params]) {
    const router = Ember.get(this, 'router');
    Ember.assert('[ember-transition-helper] Unable to lookup router', router);
    return function(...invocationArgs) {
      const args = params.concat(invocationArgs);
      const transitionArgs = params.length ? [routeName, ...params] : [routeName];
      router.transitionTo.apply(router, _transformQueryParams(transitionArgs));
      return args;
    };
  }
});
