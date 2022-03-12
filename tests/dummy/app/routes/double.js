import Route from '@ember/routing/route';

export default class TestRoute extends Route {
  model(params) {
    return params;
  }
}
