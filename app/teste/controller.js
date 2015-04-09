define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('TesteCtrl', TesteCtrl);

  //---

  //TesteCtrl.$inject = [];

  function TesteCtrl() {
    var vm = this;

    vm.evento = function() {
      console.log();
    };

  }

});
