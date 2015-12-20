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
    goToBlog: function (blog_id) {
      console.log(blog_id);
      this.transitionTo('blog', blog_id);
    }
  }
});
