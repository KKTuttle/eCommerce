import DS from 'ember-data';

export default DS.Model.extend({
  itemName: DS.attr(),
  description: DS.attr(),
  price: DS.attr('number'),
  feedbacks: DS.hasMany('feedback', {async: true}),
});
