import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard');
  this.route('blogs');
  this.route('posts', {path: '/posts/:id'});
  this.route('about');
  this.route('public');
});

export default Router;
