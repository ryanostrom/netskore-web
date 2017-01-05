import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model() {
    this.cookie.removeCookie('loggedIn');
    this.cookie.removeCookie('user');

    return Ember.RSVP.hash({
      users: this.get('ajax').request('http://api.netskore.com/users')
    });
  },

  setupController(controller, models) {
    controller.set('users', models.users);
  }

});
