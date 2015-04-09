define(function(require) {
  'use strict';

  var angular = require('angular');

  require('uiRouter');

  // angular module definition
  return angular.module(

    // module name
    'subheader',

    // module dependencies
    [
      'ui.router'
    ]
  );

});
