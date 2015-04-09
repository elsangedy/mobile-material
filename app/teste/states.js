define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  configureStates.$inject = ['$stateProvider'];

  function configureStates($stateProvider) {

    $stateProvider
      .state('teste', {
        url: '/teste',
        views: {
          'master': {
            templateUrl: 'app/teste/tpl/layout.html',
            controller: 'TesteCtrl',
            controllerAs: 'vm'
          }
        }
      });

  }

});
