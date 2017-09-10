import Ember from 'ember';
const { Helper, assert, computed, getOwner, get } = Ember;

export default Helper.extend({
  router: computed(function() {
    return getOwner(this).lookup('router:main');
  }).readOnly(),
  
  compute([routeName, ...params]) {
    let router = get(this, 'router');
    assert('[ember-transition-helper] Unable to lookup router', router);
    return function(...invocationArgs) {
      let args = params.concat(invocationArgs);
      let transitionArgs = params.length ? [routeName, ...params] : [routeName];
      transitionArgs = this._transformQueryParams(transitionArgs);
      router.transitionTo.apply(router, transitionArgs);
      return args;
    };
  },
  
    // Transforms query-params template helper to what transitonTo expects
  _transformQueryParams(transitionArgs) {
    return transitionArgs.map((arg) => {
      if (arg.isQueryParams) {
        return { queryParams: arg.values };
      } else {
        return arg;
      }
    });
  }
});
