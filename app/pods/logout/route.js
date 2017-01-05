import Ember from 'ember';

export default Ember.Route.extend({
  nav: Ember.inject.service(),

  beforeModel() {
    let nav = this.get('nav');
    nav.set('menu', nav.get('loggedOut'));

    this.cookie.removeCookie('loggedIn');
    this.cookie.removeCookie('user');
    this.transitionTo('index');
  }
});
