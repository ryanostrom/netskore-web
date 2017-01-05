import Ember from 'ember';
export default Ember.Service.extend({

  menu: [],

  loggedOut: [
    { route: 'login', label: 'Login', class: 'button small hollow marall-0' },
    { route: 'signup', label: 'Sign Up', class: 'button small marall-0' }
  ],

  loggedIn: [
    { route: 'logout', label: 'Logout', class: 'button small hollow marall-0' }
  ],

});
