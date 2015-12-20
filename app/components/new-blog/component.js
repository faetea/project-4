import Ember from 'ember';

export default Ember.Component.extend({
  newBlog: {
    title: null,
    content: null,
  },

  actions: {
    createBlog: function (){
      Ember.$.ajax({
        url: "http://localhost:3000/blogs",
        method: "post",
        contentType: "application/json",
        xhrFields: { withCredentials: true },
        data: JSON.stringify(this.get('newBlog'))
        // success: function (data) { console.log("login succeeded"); }
      });
      location.reload();
    }, // end createBlog

  } // end actions
});
