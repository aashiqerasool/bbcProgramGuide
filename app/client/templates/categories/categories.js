/*****************************************************************************/
/* Categories: Event Handlers */
/*****************************************************************************/
Template.Categories.events({
});

/*****************************************************************************/
/* Categories: Helpers */
/*****************************************************************************/
Template.Categories.helpers({
  categoryDisplay: function() {
    return Categories.find();
  }
});

/*****************************************************************************/
/* Categories: Lifecycle Hooks */
/*****************************************************************************/
Template.Categories.created = function () {
};

Template.Categories.rendered = function () {
};

Template.Categories.destroyed = function () {
};
