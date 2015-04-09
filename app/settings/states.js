define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  configureStates.$inject = ['$stateProvider'];

  function configureStates($stateProvider) {

    $stateProvider
      .state('tabs.settings', {
        url: '/settings',
        views: {
          'settings': {
            templateUrl: 'app/settings/tpl/layout.html',
            controller: 'SettingsCtrl',
            controllerAs: 'vm'
          }
        }
      });

  }

});
