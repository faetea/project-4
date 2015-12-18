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
      });
    },

  } // end actions
});


// $('#current-user').html('Logging in...');
// var loginCb = function(err) {
//   if (err){
//     console.error(err);
//     $('#logAlert').show();
//     $('#current-user').html('Login/Register');
//     return;
//   }
//     $('#current-user').html('Welcome, ' +  + '!');
// };
