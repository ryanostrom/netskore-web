import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  // API_KEY: 'thisIsMyApiKey',
  coalesceFindRequests: true,
  host: 'http://api.netskore.com'
});
