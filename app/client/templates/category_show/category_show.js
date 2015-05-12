Template.registerHelper('equals', function (a, b) {
  return a === b;
});

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
  },
  isClip: function() {
    if (this.is_clip ===1) {
      return true;
    }
    else
      return false;
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
