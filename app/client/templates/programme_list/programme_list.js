Template.registerHelper('equals', function (a, b) {
  return a === b;
});

incrementLimit = function(inc) {
  inc=10;
  newLimit = Session.get('limit') + inc;
  Session.set('limit', newLimit);
}

/*****************************************************************************/
/* ProgrammeList: Event Handlers */
/*****************************************************************************/
Template.ProgrammeList.events({
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
/* ProgrammeList: Helpers */
/*****************************************************************************/
Template.ProgrammeList.helpers({
  programmes: function() {
    if(Session.get("onlyClips")) {
      return Programmes.find({is_clip: 1}, { limit: Session.get('limit') });
    }
    else
      return Programmes.find({ }, { limit: Session.get('limit') });
  },
    isClip: function() {
    if (this.is_clip ===1) {
      return true;
    }
    else
      return false;
  },
    programmeCount: function() {
      return Programmes.find({}).count();
  }
});

/*****************************************************************************/
/* ProgrammeList: Lifecycle Hooks */
/*****************************************************************************/
Template.ProgrammeList.created = function () {
  Session.setDefault('limit', 10);
  Session.setDefault('onlyClips', false);

  // Tracker.autorun() automatically rerun the subscription whenever Session.get('limit') changes
  // http://docs.meteor.com/#deps_autorun
  Tracker.autorun(function() {
    Meteor.subscribe('programmes', Session.get('limit'));
  });
};

Template.ProgrammeList.rendered = function () {
};

Template.ProgrammeList.destroyed = function () {
};
