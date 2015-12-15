import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transitionTo(route) {
      this.transitionTo(route);
    },
    // getAllBlogs: function () {
    //   Ember.$.getJSON('http://localhost:3000/fake').then(function (data) {
    //     console.log(data);
    //   });
    // },
    // raisedButton() {
    //   alert('You pressed a raised button.');
    // },
    // flatButton() {
    //   alert('You pressed a flat button.');
    // },
    // targetButton() {
    //   alert('You pressed a target button. -from route');
    // },
    // willTransition() {
    //   this.controller.set('drawerOpen', false);
    // },
    // alertValue(value) {
    //   alert('You clicked Radio button: ' + value);
    // },
  } // end actions
}); // end Ember.Route

