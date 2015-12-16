import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return Ember.$.ajax({
      url: "http://localhost:3000/blogs",
      method: "get",
      contentType: "application/json",
      xhrFields: { withCredentials: true },
    });
  },

  actions: {
    // create: function (newBlog){
    //   console.log('create action received');
    //   this.store.createRecord('blog', newBlog).save();
    // },
    // createBlog: function (blogData, user_id){
    //   console.log('create new Blog action received');
    //   console.log(user_id);
    //   var newBlog = this.store.createRecord('blog', blogData);
    //   this.store.findRecord('user', user_id).then(function (user){
    //     user.get('blog').addObject(newBlog);
    //     newBlog.save();
    //   });
    // },
    // destroyBlog: function (blog){
    //   this.store.findRecord('blog', blog.get('id')).then(function(blogRecord){
    //     blogRecord.destroyRecord();
    //     console.log('blog record destroyed');
    //   });
    // }
  } // end actions
});
