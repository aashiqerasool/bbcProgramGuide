/*****************************************************************************/
/* Filters: Subscriptions */
/*****************************************************************************/
Meteor.subscribe('categories');
/*****************************************************************************/
/* Filters: Event Handlers */
/*****************************************************************************/
Template.filters.events({
  'click .filter' : function () {
      var instance = EasySearch.getComponentInstance(
        { index : 'programmes' }
      );

//       // Change the currently filteredCategories like this
//       EasySearch.changeProperty('programmes', 'filteredCategories', categories);
//       // Trigger the search again, to reload the new products
//       instance.triggerSearch();
    }
});

/*****************************************************************************/
/* Filters: Helpers */
/*****************************************************************************/
Template.filters.helpers({
  categories: function () {
    return Categories.find().fetch();
  }
});

/*****************************************************************************/
/* Filters: Lifecycle Hooks */
/*****************************************************************************/
Template.filters.created = function () {
};

Template.filters.rendered = function () {
};

Template.filters.destroyed = function () {
};
