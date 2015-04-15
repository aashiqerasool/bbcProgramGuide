/*****************************************************************************/
/* ShowProgramme: Event Handlers */
/*****************************************************************************/
Template.ShowProgramme.events({
});

/*****************************************************************************/
/* ShowProgramme: Helpers */
/*****************************************************************************/
Template.ShowProgramme.helpers({
  serviceDisplay: function() {
    return Service.findOne({_id: this.service}).display_as;
  }
});

/*****************************************************************************/
/* ShowProgramme: Lifecycle Hooks */
/*****************************************************************************/
Template.ShowProgramme.created = function () {
};

Template.ShowProgramme.rendered = function () {
};

Template.ShowProgramme.destroyed = function () {
};
