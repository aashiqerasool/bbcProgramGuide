Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});


Router.route('tag_list', {
  name: 'tagList',
  controller: 'TagsController',
  action: 'list',
  where: 'client'
});

Router.route('/tag_list/:_id', {
  name: 'showTag',
  controller: 'TagsController',
  action: 'show',
  where: 'client'
});

Router.route('programme_list', {
  name: 'programmeList',
  controller: 'ProgrammesController',
  action: 'list',
  where: 'client'
});

Router.route('/programmes/:_id', {
  name: 'showProgramme',
  controller: 'ProgrammesController',
  action: 'show',
  where: 'client'
});

Router.route('search', {
  name: 'search',
  controller: 'SearchController',
  action: 'action',
  where: 'client'
});

Router.route('/search/id', {
  name: 'searchId',
  controller: 'IdController',
  action: 'action',
  where: 'client'
});

Router.route('/search/:_id', {
  name: 'search:Id',
  controller: ':IdController',
  action: 'action',
  where: 'client'
});

Router.route('categories', {
  name: 'categories',
  controller: 'CategoriesController',
  action: 'action',
  where: 'client'
});

Router.route('/categories/:_id', {
  name: 'categories:Id',
  controller: 'CategoriesController',
  action: 'list',
  where: 'client'
});

Router.route('services', {
  name: 'services',
  controller: 'ServicesController',
  action: 'action',
  where: 'client'
});

Router.route('/services/:_id', {
  name: 'services:Id',
  controller: 'ServicesController',
  action: 'list',
  where: 'client'
});