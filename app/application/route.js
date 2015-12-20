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
    logout: function (){
      // console.log(this.get('credentials'));
      Ember.$.ajax({
        url: "http://localhost:3000/logout",
        method: "post",
        contentType: "application/json",
        xhrFields: { withCredentials: true },
      });
    },

  } // end actions
}); // end Ember.Route
