import Ember from 'ember';

export default Ember.Component.extend({
  credentials: {
    username: null,
    password: null
  },

  actions: {
    login: function (){
      // console.log(this.get('credentials'));
      Ember.$.ajax({
        url: "http://localhost:3000/login",
        method: "post",
        contentType: "application/json",
        xhrFields: { withCredentials: true },
        data: JSON.stringify(this.get('credentials'))
        // success: function (data) { console.log("login succeeded"); }
      });
    },

  } // end actions
});
