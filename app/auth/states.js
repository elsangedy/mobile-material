define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  configureStates.$inject = ['$stateProvider'];

  function configureStates($stateProvider) {

    $stateProvider
      .state('login', {
        url: '/login',
        views: {
          'master': {
            templateUrl: 'app/auth/tpl/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'vm'
          }
        }

      });

  }

});
