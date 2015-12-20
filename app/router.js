import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', {path: '/dash'});
  this.route('blogs');
  this.route('blog', {path: '/blog/:blog_id'});

  this.route('posts'
    //, {path: '/posts/:id'}
    ); // load all of the blog posts for the app?
  this.route('post', {path: '/post/:post_id'}); // a single post

  this.route('about');
});

export default Router;
