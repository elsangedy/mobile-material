define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('TabsCtrl', TabsCtrl);

  //---

  TabsCtrl.$inject = ['$state'];

  function TabsCtrl($state) {
    var vm = this;

    vm.tabGo = tabGo;

    if($state.current.name == 'tabs.history')
      vm.activeTab = 1;
    else if($state.current.name == 'tabs.gamification')
      vm.activeTab = 2;
    else if($state.current.name == 'tabs.settings')
      vm.activeTab = 3;
    else
      vm.activeTab = 0;

    //---

    function tabGo(state) {
      $state.go('tabs.'+state);
    }
  }
});
