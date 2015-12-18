import Ember from 'ember';

export default Ember.Component.extend({
  model: function () {
    return this.store.findAll('blog');
  }
});
