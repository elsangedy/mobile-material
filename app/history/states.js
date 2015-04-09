define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  configureStates.$inject = ['$stateProvider'];

  function configureStates($stateProvider) {

    $stateProvider
      .state('tabs.history', {
        url: '/history',
        views: {
          'history': {
            templateUrl: 'app/history/tpl/layout.html',
            controller: 'HistoryCtrl',
            controllerAs: 'vm'
          }
        }
      });

  }

});
