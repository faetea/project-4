import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.findAll('blog');
  },
  // model: function () {
  //   return Ember.$.ajax({
  //     url: "http://localhost:3000/users/blogs",
  //     method: "get",
  //     contentType: "application/json",
  //     xhrFields: { withCredentials: true },
  //   });
  // }

  actions: {
    goToBlog: function (blogId) {
      console.log(blogId);
      this.transitionTo('posts', blogId);
    }
  }
});
