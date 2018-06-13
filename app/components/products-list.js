import Component from '@ember/component';
import { computed } from '@ember/object';
import { products } from '../mocks/products';

export default Component.extend({
  onProductLiked: (evt) => {
    const data = JSON.parse(evt.detail);
    console.log(data);
  },
  processProduct: (product) => {
    return JSON.stringify(product)
  },
  products: computed(function() {
    return products
  })
});
