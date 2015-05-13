/*****************************************************************************/
/* Services: Event Handlers */
/*****************************************************************************/
Template.Services.events({
});

/*****************************************************************************/
/* Services: Helpers */
/*****************************************************************************/
Template.Services.helpers({
    servicesDisplay: function() {
    return MasterBrand.find();
  }
});

/*****************************************************************************/
/* Services: Lifecycle Hooks */
/*****************************************************************************/
Template.Services.created = function () {
};

Template.Services.rendered = function () {
};

Template.Services.destroyed = function () {
};
