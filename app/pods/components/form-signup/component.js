import Ember from 'ember';
import ValidatableInput from 'ember-cli-html5-validation/mixins/validatable-input';

ValidatableInput.reopen({
  errorTemplates: {
    valueMissing: {
      defaultMessage: "Required"
    }
  }
});

export default Ember.Component.extend({

  store: Ember.inject.service(),
  nav: Ember.inject.service(),

  tagName: '',

  userExists: false,

  firstName: '',
  lastName: '',
  email: '',
  password: '',

  actions: {
    signup() {
      let _this = this,
      store = this.get('store'),
      userProps = {
        name_first: this.get('firstName'),
        name_last: this.get('lastName'),
        email: this.get('email'),
        password: this.get('password'),
        role: 'user'
      };

      store.queryRecord('user', { email: userProps.email })
        .then(function(existingUser) {
          if (existingUser) {
            _this.set('userExists', true);
            return;
          }
          console.log('user');
          console.log(existingUser);
          _this.set('userExists', false);

          let user = store.createRecord('user', userProps);
          user.save();
          _this.cookie.setCookie('loggedIn', true, { expires: 7, path: 'index' })
            .then(function() {
              let nav = _this.get('nav');
              nav.set('menu', nav.get('loggedIn'));
              delete userProps.password;
              _this.cookie.setCookie('user', JSON.stringify(userProps), { expires: 7, path: 'index' });
              _this.get('router').transitionTo('dashboard');
            });
        });
    }
  }

});
