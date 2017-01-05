export function initialize(application) {
  application.inject('service', 'cookie', 'cookie:main');
  application.inject('route', 'cookie', 'cookie:main');
  application.inject('controller', 'cookie', 'cookie:main');
  application.inject('component', 'cookie', 'cookie:main');

  application.inject('component', 'router', 'router:main');
}

export default {
    name: 'application-initializer',
    after: ['cookie'],
    initialize: initialize
};
