define(function(require) {
  'use strict';

  var angular = require('angular');

  require('uiRouter');

  // angular module definition
  return angular.module(

    // module name
    'settings',

    // module dependencies
    [
      'ui.router'
    ]
  );

});
