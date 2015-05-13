Meteor.subscribe("service");

Template.MasterLayout.helpers({
  services: function() {
    return Service.find();
  },
  programmeCount: function(catId) {
//     var param = Router.current().params._id;
    //     console.log(param);
    var search = new RegExp(catId, 'i');
    return Programmes.find({categories: search}).count();
  }
});

Template.MasterLayout.events({
});
