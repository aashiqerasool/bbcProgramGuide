Template.registerHelper('equals', function (a, b) {
  return a === b;
});

incrementLimit = function(inc) {
  inc=10;
  newLimit = Session.get('limit') + inc;
  Session.set('limit', newLimit);
}

/*****************************************************************************/
/* ServiceShow: Event Handlers */
/*****************************************************************************/
Template.ServiceShow.events({
  'click .more-programmes': function(evt) {
    incrementLimit();
  },
  'click .only-clips': function(evt) {
    Session.set("onlyClips", !Session.get("onlyClips"));
    if(Session.get("onlyClips") === true) {
      $(evt.target).text("Show All");
    }
    else if(Session.get("onlyClips") === false) {
      $(evt.target).text("Show Only Clips");
    }
  }  
});

/*****************************************************************************/
/* ServiceShow: Helpers */
/*****************************************************************************/
Template.ServiceShow.helpers({
  channelDisplayAs: function() {
    var idParam = Router.current().params._id;
    var idRegex = new RegExp(idParam, 'i');
    console.log(idParam);
    return MasterBrand.findOne({_id: idParam}).display_as;
  },
  programmesShow: function() {
    var param = Router.current().params._id;
    console.log(param);
    var search = new RegExp(param, 'i');
    if(Session.get("onlyClips")) {
      return Programmes.find({masterbrand: param, is_clip: 1}, { limit: Session.get('limit') });
    }
    else
      return Programmes.find({masterbrand: param}, { limit: Session.get('limit') });
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
    return Programmes.find({masterbrand: search}).count();
  }
});

/*****************************************************************************/
/* ServiceShow: Lifecycle Hooks */
/*****************************************************************************/
Template.ServiceShow.created = function () {
  Session.setDefault('limit', 10);
  Session.setDefault('onlyClips', false);

  // Tracker.autorun() automatically rerun the subscription whenever Session.get('limit') changes
  // http://docs.meteor.com/#deps_autorun
  Tracker.autorun(function() {
    Meteor.subscribe('programmes', Session.get('limit'));
  });
};

Template.ServiceShow.rendered = function () {
  //   $(window).scroll(function() {
//     if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
//       incrementLimit();
//     }
//   });
};

Template.ServiceShow.destroyed = function () {
};
