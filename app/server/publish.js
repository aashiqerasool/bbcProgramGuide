/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('tags', function (/* args */) {
  return Tags.find();
});

Meteor.publish('programmes', function (limit) {
  if (limit > Programmes.find().count()) {
    limit = 0;
  }
  
  return Programmes.find({ }, { limit: limit});
});

FilterCollections.publish(Programmes, {
  name: 'programmesFilter',
  callbacks: {/*...*/}
});

Meteor.publish('service', function (/* args */) {
  return Service.find();
});

Meteor.publish('masterbrand', function (/* args */) {
  return MasterBrand.find();
});

Meteor.publish('categories', function (/* args */) {
  return Categories.find();
});