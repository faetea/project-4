import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  // hidden: DS.attr('boolean'),
  category: DS.attr('string'),
  description: DS.attr('string'),
  username: DS.belongsTo('user', {async: true}),
  // posts: DS.hasMany('post', {async: true})
});
