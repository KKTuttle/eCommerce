import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveFeedback() {
      var date = Date.now();
      var params = {
        item: this.get('item'),
        userName: this.get('userName'),
        content: this.get('content'),
        date
      };
      this.sendAction('saveFeedbackToFirebase', params);
    },
  }
});
