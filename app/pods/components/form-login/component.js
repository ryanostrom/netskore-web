import Ember from 'ember';

export default Ember.Component.extend({

  nav: Ember.inject.service(),

  hasNoError: true,

  tagName: '',

  email: '',
  password: '',

  actions: {
    login() {
      let _this = this,
      userProperties = {
        email: this.get('email'),
        password: this.get('password')
      };

      return new Ember.RSVP.Promise((resolve, reject) => {
        Ember.$.ajax({
          type: 'POST',
          url: `/api/v1/login`,
          data: {
            email: encodeURIComponent(userProperties.email),
            password: userProperties.password,
          },

          success: function (result) {
            let loginRedirect = _this.cookie.getCookie('loginRedirect'),
              route = loginRedirect ? loginRedirect : 'dashboard';

            _this.cookie.removeCookie('loginRedirect');
            _this.cookie.setCookie('loggedIn', true, { expires: 7, path: 'index' })
              .then(function() {
                let nav = _this.get('nav');
                nav.set('menu', nav.get('loggedIn'));
                delete result.user.password;

                _this.cookie.setCookie('user', JSON.stringify(result.user), { expires: 7, path: 'index' });
                _this.get('router').transitionTo(route);
              });
            resolve(result);
          },
          error: function () {
            Ember.set(_this, 'hasNoError', false);
            reject();
          }
        });
      });
    }
  }

});
