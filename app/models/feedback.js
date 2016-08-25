import DS from 'ember-data';

export default DS.Model.extend({
  userName: DS.attr(),
  content: DS.attr(),
  date: DS.attr('number'),
  ratings: DS.attr('number'),
  item:DS.belongsTo('item', {async: true}),

});
