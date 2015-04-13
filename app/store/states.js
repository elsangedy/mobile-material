define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  configureStates.$inject = ['$stateProvider'];

  function configureStates($stateProvider) {

    $stateProvider
      .state('tabs.store', {
        url: '/store',
        views: {
          'store': {
            templateUrl: 'app/store/tpl/layout.html',
            controller: 'StoreCtrl',
            controllerAs: 'vm'
          }
        }
      });

  }

});
