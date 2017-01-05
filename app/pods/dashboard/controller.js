import Ember from 'ember';

export default Ember.Controller.extend({
  user: Ember.computed(function() {
    return JSON.parse(this.cookie.getCookie('user'));
  })
});
