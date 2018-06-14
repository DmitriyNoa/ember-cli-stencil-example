import Component from '@ember/component';
import { computed } from '@ember/object';
import { products } from '../mocks/products';
import Ember from 'ember';
export default Component.extend({
  repo: Ember.inject.service(),
  needs: "service:repo",
  onProductLiked (evt) {
    console.log(evt);
    const data = JSON.parse(evt.detail);
    this.createTodo(data);
  },
  actions: {
    onProductLiked (evt) {
      console.log(evt);
      const data = JSON.parse(evt.detail);
      this.createTodo(data);
    }
  },
  processProduct: (product) => {
    return JSON.stringify(product)
  },
  createTodo(data) {
      this.get('repo').add(data);
  },
  products: computed(function() {
    return products
  }),
  likedProducts: computed(function() {
    return this.get('repo').findAll()
  })
});
