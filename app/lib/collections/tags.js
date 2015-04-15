Tags = new Mongo.Collection('tags');

Tags.attachSchema(new SimpleSchema({
  tag: {
    type: String,
    label: "Tag",
    max: 300
  },
  display_as: {
    type: String,
    label: "Tag",
    max: 300
  }
}));


if (Meteor.isServer) {
  Tags.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });

  Tags.deny({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
