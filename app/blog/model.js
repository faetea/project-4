import DS from 'ember-data';

export default DS.Model.extend({
  _id: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  author: DS.attr('string'),
  posts: DS.hasMany('post')
  // posts: DS.hasMany('post', {async: true})
});
