import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
const App = Application.extend({
  modulePrefix: config.modulePrefix,
  customEvents: {
    // add support for the paste event
    productLiked: 'productLiked'
  },
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
