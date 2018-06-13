import Component from '@ember/component';
import { computed } from '@ember/object';
import { products } from '../mocks/products';

export default Component.extend({
  onProductLiked: (evt) => {
    console.log(evt.detail);
  },
  processProduct: (product) => {
    return JSON.stringify(product)
  },
  didInsertElement() {
    this.$('z-product-card').on('productLiked', this.onProductLiked);
  },
  didDestroyElement() {
    this.$('z-product-card').off('productLiked', this.onProductLiked);
  },
  products: computed(function() {
    return products
  })
});
