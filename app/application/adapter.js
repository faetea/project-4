import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  // host: 'http://localhost:3000',
  host: 'https://desolate-headland-9492.herokuapp.com',
  primaryKey: '_id'
});
