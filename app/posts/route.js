import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(model, transition) {
    if (model.get('length') === 1) {
      this.transitionTo('post', model.get('firstObject'));
    }
  },

  // model: function (blogId) {
  //   return this.store.query('blog', blogId);
  // }

  // model: function () {
  //   return Ember.$.ajax({
  //     url: "http://localhost:3000/blogs/:id/posts",
  //     method: "get",
  //     contentType: "application/json",
  //     xhrFields: { withCredentials: true },
  //   });
  // },

});

