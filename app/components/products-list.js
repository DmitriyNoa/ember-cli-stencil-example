import Component from '@ember/component';
import { computed } from '@ember/object';
import { products } from '../mocks/products';

export default Component.extend({
  str: function (test) {
    alert(test);
  },
  products: computed(function() {
    return products.map((item) => {
      return JSON.stringify(item)
    })
  })
});
