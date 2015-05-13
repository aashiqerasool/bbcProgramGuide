Programmes = new Mongo.Collection('programmes');
Programmes.initEasySearch(['complete_title', "media_type"], {
  'limit' : 15,
  'use' : 'mongo-db'
});

// EasySearch.createSearchIndex('programmes', {
//   'field' : ['complete_title'],
//   'collection' : Programmes,
//   'props' : {
//     'filteredCategories' : []
//   },
//   'query' : function (searchString) {
//     // Default query that will be used for searching
//     var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);

//     // filter for categories if set
//     if (this.props.filteredCategories.length > 0) {
//       query.categories = { $in : this.props.filteredCategories };
//     }

//     return query;
//   }
// });


if (Meteor.isServer) {
  Programmes.allow({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });

  Programmes.deny({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
