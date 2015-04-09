define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  configureStates.$inject = ['$stateProvider'];

  function configureStates($stateProvider) {

    $stateProvider
      .state('subheader', {
        url: '/subheader',
        views: {
          'master': {
            templateUrl: 'app/subheader/tpl/layout.html',
            controller: 'SubCtrl',
            controllerAs: 'vm'
          }
        }
      });

  }

});
