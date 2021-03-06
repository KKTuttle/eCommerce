import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      items: this.store.findAll('item')
    });
  },
  actions: {
    updateItem(item, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!== undefined) {
          item.set(key,params[key]);
        }
      });
      item.save();
      this.transitionTo('admin');
    },
    saveItemToFirebase(params) {
      var newItem = this.store.createRecord('item', params);
      newItem.save();
      this.transitionTo('admin');
    },
    destroyItem(item) {
      item.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
