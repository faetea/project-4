import Ember from 'ember';

export default Ember.Component.extend({
  isEditable: false,
  // doubleClick: function(){
  //   this.toggleProperty('isEditable');
  // },
  actions: {
    toggleEditable: function(){
      this.toggleProperty('isEditable');
    },
    confirmEdit: function(blog){
      console.log("editing a blog");
      console.log(blog);

      Ember.$.ajax({
        // url: "http://localhost:3000/blogs/"+ blog.id,
        url: "https://desolate-headland-9492.herokuapp.com/blogs/"+ blog.id,
        method: "put",
        contentType: "application/json",
        xhrFields: { withCredentials: true },
        data: JSON.stringify(blog)
      });

      this.toggleProperty('isEditable');
    }
    // destroyItem: function(){
    //   this.sendAction('routeDestroyBlog', this.get('blog'));
    // },
  }
});
