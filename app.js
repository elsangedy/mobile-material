define(function(require) {
  'use strict';

  var angular = require('angular');

  if(window.cordova !== undefined)
    document.addEventListener('deviceready', startAngularApp, false);
  else
    angular.element(document).ready(startAngularApp);

  //---

  function startAngularApp() {

    // define app module to bootstrap application
    var module = angular.module(

      // module name
      'app',

      // module dependencies
      [
        require('app/main/package').name
      ]
    );

    // start angular app
    angular.bootstrap(document, [module.name]);

  }

});
