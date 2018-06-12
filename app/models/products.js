import DS from 'ember-data';
import products from '../products';
export default DS.Model.extend({
  products: products
});
