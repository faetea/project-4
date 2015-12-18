import DS from 'ember-data';

export default DS.Model.extend({
  _id: DS.attr('string'),
  title: DS.attr('string'),
  content: DS.attr('string'),
  // author: DS.attr('string'),
  // blog: DS.belongsTo('blog', {async: true})
});
