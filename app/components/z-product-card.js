import layout from '../templates/components/z-product-card';
import Component from '@ember/component';
import { computed } from '@ember/object';
export default Component.extend({
  layout,
  attributeBindings: ['product'],
  tagName: 'z-product-card'
});