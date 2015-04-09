define(function(require) {
  'use strict';

  var module = require('../module');

  module.directive('subheader', subheader);

  //---

  //subheader.$inject = [];

  function subheader() {

    var scope = {
      title: '@'
    };

    var directive = {
      restrict: 'E',
      scope: scope,
      transclude: true,

      require: '^subheaders',

      link: linkFn,
      template: templateFn
    };

    return directive;

    //---

    function linkFn(scope, element, attrs, ctrl) {

      ctrl.addSubheader(element);

    }

    //---

    function templateFn(element, attr) {
      return [

        '<div class="subheader">',
        ' <div class="subheader-title">{{ title }}</div>',
        ' <div ng-transclude></div>',
        '</div>'

      ].join('');
    }
  }

});