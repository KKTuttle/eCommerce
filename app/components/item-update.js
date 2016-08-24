import Ember from 'ember';

export default Ember.Component.extend({
  updateItemForm: false,
  actions: {
    updateItemForm() {
      this.set('updateItemForm', true);
    },
    updateItem(item) {
      var params = {
        itemName: this.get('itemName'),
        description: this.get('description'),
        price: this.get('price'),
      };
      this.set('updateItemForm', false);
      this.sendAction('updateItem', item, params);
    },
    deleteItem(item){
      this.sendAction('deleteItem', item);
    }

  }
});
