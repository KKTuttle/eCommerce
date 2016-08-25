import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['rating:desc'],
  sortedFeedbacks: Ember.computed.sort('feedbacks', 'sortBy')
});
