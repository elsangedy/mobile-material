define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(config);

  //---

  config.$inject = ['$mdThemingProvider'];

  function config($mdThemingProvider) {

    $mdThemingProvider.theme('default')
      .primaryPalette('teal');

  }

});
