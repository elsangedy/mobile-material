define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  configureStates.$inject = ['$stateProvider'];

  function configureStates($stateProvider) {

    $stateProvider
      .state('tabs.gamification', {
        url: '/gamification',
        views: {
          'gamification': {
            templateUrl: 'app/gamification/tpl/layout.html',
            controller: 'GamificationCtrl',
            controllerAs: 'vm'
          }
        }
      });

  }

});
