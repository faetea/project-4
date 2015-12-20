import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', {path: '/dash'});
  this.route('about');

  this.route('blogs'); // all users blogs
  this.route('blog', {path: '/blog/:blog_id'}); // a single blog

  this.route('posts'
    //, {path: '/posts/:id'}
    ); // load all of the posts for this blog?
  this.route('post', {path: '/post/:post_id'}); // a single post

});

export default Router;
