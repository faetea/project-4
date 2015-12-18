import Ember from 'ember';

export default Ember.Component.extend({
  newPost: {
    title: null,
    text: null,
  },

  actions: {
    createPost: function (blogId){
      Ember.$.ajax({
        url: "http://localhost:3000/blogs/" + blogId + "/posts",
        method: "post",
        contentType: "application/json",
        xhrFields: { withCredentials: true },
        data: JSON.stringify(this.get('newPost'))
      });
      location.reload();
    }, // end createPost

  } // end actions
});
