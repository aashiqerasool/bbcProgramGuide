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