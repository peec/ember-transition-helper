import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default class TransitionToHelper extends Helper {
  @service router;

  compute(positional, named) {
    const router = this.router;
    return function (event) {
      if (named.preventDefault) {
        event.preventDefault();
      }
      const [routeName, ...positionalParams] = positional;
      // Example usage of RouterService API:
      //   this.router.transitionTo('post', object, { queryParams: { showDetails: true }});
      //   this.router.transitionTo('posts', { queryParams: { sort: 'title' }});
      const { queryParams } = named;
      if (queryParams) {
        if (positionalParams.length > 0) {
          router.transitionTo(routeName, ...positionalParams, { queryParams });
        } else {
          router.transitionTo(routeName, { queryParams });
        }
      } else {
        if (positionalParams.length > 0) {
          router.transitionTo(routeName, ...positionalParams);
        } else {
          router.transitionTo(routeName);
        }
      }
    };
  }
}
