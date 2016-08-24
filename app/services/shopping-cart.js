import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  itemPrices: Ember.computed.mapBy('items', "price"),
  totalPrice: Ember.computed.sum('itemPrices'),
  add(item){
    this.get('items').pushObject(item);
  },
  remove(item){
    this.get('items').removeObject(item);
  },
});
