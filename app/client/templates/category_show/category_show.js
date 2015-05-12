Template.registerHelper('equals', function (a, b) {
  return a === b;
});

incrementLimit = function(inc) {
  inc=10;
  newLimit = Session.get('limit') + inc;
  Session.set('limit', newLimit);
}

/*****************************************************************************/
/* CategoryShow: Event Handlers */
/*****************************************************************************/
Template.CategoryShow.events({
  'click .more-programmes': function(evt) {
    incrementLimit();
  },
  'click .only-clips': function(evt) {
    Session.set("onlyClips", true);
  }  
});

/*****************************************************************************/
/* CategoryShow: Helpers */
/*****************************************************************************/
// PeopleFilter = new FilterCollections(Programmes, {
//   template: 'CategoryShow',
//   name: 'programmesFilter'
// });

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
    if(Session.get("onlyClips")) {
      return Programmes.find({categories: search, is_clip: 1}, { limit: Session.get('limit') });
    }
    else
      return Programmes.find({categories: search}, { limit: Session.get('limit') });
  },
  isClip: function() {
    if (this.is_clip ===1) {
      return true;
    }
    else
      return false;
  },
  programmeCount: function() {
    var param = Router.current().params._id;
//     console.log(param);
    var search = new RegExp(param, 'i');
    return Programmes.find({categories: search}).count();
  }
});

/*****************************************************************************/
/* CategoryShow: Lifecycle Hooks */
/*****************************************************************************/
Template.CategoryShow.created = function () {
  Session.setDefault('limit', 10);
  Session.setDefault('onlyClips', false);

  // Tracker.autorun() automatically rerun the subscription whenever Session.get('limit') changes
  // http://docs.meteor.com/#deps_autorun
  Tracker.autorun(function() {
    Meteor.subscribe('programmes', Session.get('limit'));
  });
};

Template.CategoryShow.rendered = function () {
//   $(window).scroll(function() {
//     if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
//       incrementLimit();
//     }
//   });
};

Template.CategoryShow.destroyed = function () {
};
