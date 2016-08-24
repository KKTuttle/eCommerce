import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateItem(item, params){
      this.sendAction('updateItem', item, params);
    },
    deleteItem(item){
      this.sendAction('destroyItem', item);
    }
  }
});
