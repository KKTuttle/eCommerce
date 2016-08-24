import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveItem() {
      var params = {
        itemName: this.get('itemName'),
        description: this.get('description'),
        price: parseInt(this.get('price'))
      };
      this.sendAction('saveItemToFirebase', params);
    }
  }
});
