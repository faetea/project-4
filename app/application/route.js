import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transitionTo(route) {
      this.transitionTo(route);
    },
    willTransition() {
      this.controller.set('drawerOpen', false);
    },
  }
});
