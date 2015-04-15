/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('tags', function (/* args */) {
  return Tags.find();
});

Meteor.publish('programmes', function (/* args */) {
  return Programmes.find();
});

Meteor.publish('service', function (/* args */) {
  return Service.find();
});

Meteor.publish('categories', function (/* args */) {
  return Categories.find();
});