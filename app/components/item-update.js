import Ember from 'ember';

export default Ember.Component.extend({
  updateItemForm: false,
  actions: {
    updateItemForm() {
      this.set('updateItemForm', true);
    },
    updateItem(item) {
      var params = {
        itemName: this.get('itemNameUpdate'),
        description: this.get('descriptionUpdate'),
        price: this.get('priceUpdate'),
      };
      this.set('updateItemForm', false);
      this.sendAction('updateItem', item, params);
    },
    deleteItem(item){
      this.sendAction('deleteItem', item);
    }

  }
});
