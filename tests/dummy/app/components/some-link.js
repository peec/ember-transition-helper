import Component from '@ember/component';
import layout from '../templates/components/some-link';

export default Component.extend({
  tagName: 'button',
  layout,
  click(...args) {
    const action = this.get('action');
    if (typeof action === 'function') {
      action(this, ...args);
    }
  },
});
