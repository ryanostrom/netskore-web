import Ember from 'ember';

/**
 * A mixin to to validate two values do not equal each other
 */
export default Ember.Helper.helper(function(params) {
  return params[0] === params[1];
});
