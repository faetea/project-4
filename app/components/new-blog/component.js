import Ember from 'ember';

export default Ember.Component.extend({
  newBlog: {
    title: null,
    username: null,
    description: null,
    category: null,
    hidden: null
  },
  actions: {
    createBlog: function(){
      this.sendAction('routeCreateBlog', this.get('newBlog'));
    }
  }
});
