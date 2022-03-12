import Controller from '@ember/controller';

export default class TestController extends Controller {
  get serialized() {
    return JSON.stringify(this.model, null, 2);
  }
}
