import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.findAll('blog');
  },

  actions: {
    goToBlog: function (blog_id) {
      console.log(blog_id);
      this.transitionTo('blog', blog_id);
    }
  }
});
