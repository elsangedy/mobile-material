define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  configureStates.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configureStates($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
      .when('/tabs', '/tabs/stores');

    $stateProvider
      .state('tabs', {
        url: '/tabs',
        views: {
          'master': {
            templateUrl: 'app/tabs/tpl/layout.html',
            controller: 'TabsCtrl',
            controllerAs: 'vm'
          }
        }
      });

  }

});
