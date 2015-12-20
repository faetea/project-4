import DS from 'ember-data';

export default DS.Model.extend({
  _id: DS.attr('string'),
  title: DS.attr('string'),
  content: DS.attr('string'),
  authorName: DS.attr('string'),
  // posts: DS.hasMany('post', {async: true})
});
