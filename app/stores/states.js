define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  configureStates.$inject = ['$stateProvider'];

  function configureStates($stateProvider) {

    $stateProvider
      .state('tabs.stores', {
        url: '/stores',
        views: {
          'stores': {
            templateUrl: 'app/stores/tpl/layout.html',
            controller: 'StoresCtrl',
            controllerAs: 'vm'
          }
        }
      });

  }

});
