import Ember from 'ember';

export default Ember.Route.extend({
  model: function (blogId) {
    return this.store.query('post', blogId);
  }
  // model: function () {
  //   return Ember.$.ajax({
  //     url: "http://localhost:3000/blogs/:id/posts",
  //     method: "get",
  //     contentType: "application/json",
  //     xhrFields: { withCredentials: true },
  //   });
  // },

});
