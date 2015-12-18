import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    primaryKey: '_id',
    serializeId: function(id) {
        return id.toString();
    }
});


// import DS from 'ember-data';

// export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
//   attrs: {
//     author: { embedded: 'always' },
//     blog: { serialize: false },
//     post: { serialize: 'id' }
//   },
//   primaryKey: '_id',
//   serializeId: function(id) {
//       return id.toString();
//   }
// });


// Serializing a belongsTo relationship removes the property that refers to the parent record
// Serializing a hasMany relationship does not remove the property that refers to the parent record.
