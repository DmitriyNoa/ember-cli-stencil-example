import Ember from 'ember';

export default Ember.Route.extend({
  repo: Ember.inject.service(),
  needs: "service:repo",
  model() {
    return this.get('repo').findAll();
  }
});