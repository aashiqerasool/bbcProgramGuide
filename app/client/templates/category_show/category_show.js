/*****************************************************************************/
/* CategoryShow: Event Handlers */
/*****************************************************************************/
Template.CategoryShow.events({
});

/*****************************************************************************/
/* CategoryShow: Helpers */
/*****************************************************************************/
Template.CategoryShow.helpers({
  categoryDisplayAs: function() {
    var idParam = parseInt(Router.current().params._id);
    var idRegex = new RegExp(idParam, 'i');
    console.log(idParam);
    return Categories.findOne({_id: idParam}).display_as;
  },
  programmesShow: function() {
    var param = Router.current().params._id;
    console.log(param);
    var search = new RegExp(param, 'i');
    return Programmes.find({categories: search});
  }
});

/*****************************************************************************/
/* CategoryShow: Lifecycle Hooks */
/*****************************************************************************/
Template.CategoryShow.created = function () {
};

Template.CategoryShow.rendered = function () {
};

Template.CategoryShow.destroyed = function () {
};
