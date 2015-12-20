import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    primaryKey: '_id',
    serializeId: function(id) {
        return id.toString();
    }
});


// DS.EmbeddedRecordsMixin
// Serializing a belongsTo relationship removes the property that refers to the parent record
// Serializing a hasMany relationship does not remove the property that refers to the parent record.
