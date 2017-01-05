import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (this.cookie.getCookie('loggedIn') !== 'true') {
      this.cookie.setCookie('loginRedirect', this.routeName);
      this.transitionTo('login');
    }
  }
});
