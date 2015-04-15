/*****************************************************************************/
/* ProgrammeList: Event Handlers */
/*****************************************************************************/
Template.ProgrammeList.events({
});

/*****************************************************************************/
/* ProgrammeList: Helpers */
/*****************************************************************************/
Template.ProgrammeList.helpers({
  programmes: function() {
    return Programmes.find();
  }
});

/*****************************************************************************/
/* ProgrammeList: Lifecycle Hooks */
/*****************************************************************************/
Template.ProgrammeList.created = function () {
};

Template.ProgrammeList.rendered = function () {
};

Template.ProgrammeList.destroyed = function () {
};
