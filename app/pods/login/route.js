import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (this.cookie.getCookie('loggedIn') === 'true') {
      this.transitionTo('index');
    }
  }
});
