define(function(require) {
  'use strict';

  var module = require('../module');

  module.controller('LoginCtrl', LoginCtrl);

  //---

  LoginCtrl.$inject = ['$state'];

  function LoginCtrl($state) {
    var vm = this;

    vm.login = login;

    //---

    function login($event) {
      $event.target.disabled = true;

      $state.go('tabs.store');
    }
  }

});
