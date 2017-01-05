import Ember from 'ember';

export default Ember.Route.extend({
  nav: Ember.inject.service(),

  model: function() {
    document.getElementById('loading').remove();

    let nav = this.get('nav'),
      type = this.cookie.getCookie('loggedIn') === 'true' ? 'loggedIn' : 'loggedOut';

    nav.set('menu', nav.get(type));
  }
});
