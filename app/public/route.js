import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.findAll('blogs');
  }
  // model: function () {
  //   return Ember.$.ajax({
  //     url: "http://localhost:3000/users/blogs",
  //     method: "get",
  //     contentType: "application/json",
  //     xhrFields: { withCredentials: true },
  //   });
  // }

});
