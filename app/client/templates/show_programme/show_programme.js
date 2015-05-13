Template.registerHelper('equals', function (a, b) {
  return a === b;
});

/*****************************************************************************/
/* ShowProgramme: Event Handlers */
/*****************************************************************************/
Template.ShowProgramme.events({
    'click .related-programmes-link': function(evt) {
//     window.scrollTo(0, 0);
//       $(document).scrollTop(0);
  },
});

/*****************************************************************************/
/* ShowProgramme: Helpers */
/*****************************************************************************/
Template.ShowProgramme.helpers({
  serviceDisplay: function() {
    return Service.findOne({_id: this.service}).display_as;
  },
  masterBrandDisplay: function() {
    console.log(MasterBrand.findOne({_id: this.masterbrand}).display_as);
    return MasterBrand.findOne({_id: this.masterbrand}).display_as;
  },
  tagsDisplay: function() {
   return this.tags;
  },
  isClip: function() {
    var isClip = this.is_clip;
    if(isClip === 1){
      return true;
    }
    else
      return false;
  },
  mediaType: function() {
    var mediaType = this.media_type;
    if (mediaType=="audio") {
      return "<i class=\"fa fa-volume-up fa-3x\"></i>";
    }
    else if(mediaType=="video") {
      return "<i class=\"fa fa-film fa-3x\"></i>"
    }
  },
  relatedProgrammes: function() {
    return Programmes.find({brand_pid: this.brand_pid}, { limit: 5 });
  }
});

/*****************************************************************************/
/* ShowProgramme: Lifecycle Hooks */
/*****************************************************************************/
Template.ShowProgramme.created = function () {
};

Template.ShowProgramme.rendered = function () {
//   $(document).scrollTop( $("#top").offset().top );
};

Template.ShowProgramme.destroyed = function () {
};
