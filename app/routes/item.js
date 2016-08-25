import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('item', params.item_id);
  },
  actions: {
    saveFeedbackToFirebase(params) {
      var newFeedback = this.store.createRecord('feedback', params);
      var item = params.item;
      item.get('feedbacks').addObject(newFeedback);
      newFeedback.save().then(function() {
        return item.save();
      });
      this.transitionTo('item');
    },
  }
});
