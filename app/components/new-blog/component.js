import Ember from 'ember';

export default Ember.Component.extend({
  newBlog: {
    title: null,
    description: null,
  },
  actions: {
    createBlog: function(){
      this.sendAction('routeCreateBlog', this.get('newBlog'));
    }
  }
});
