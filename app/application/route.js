import Ember from 'ember';

export default Ember.Route.extend({
  // model: function () {
  //   return {
  //     blogs: this.store.findAll('blog'),
  //     posts: this.store.findAll('post'),
  //   };
  // },

  actions: {
    transitionTo(route) {
      this.transitionTo(route);
    },
    // willTransition() {
    //   this.controller.set('drawerOpen', false);
    // },

  } // end actions
}); // end Ember.Route

