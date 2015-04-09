define(function(require) {
  'use strict';

  var module = require('../module');

  module.directive('subheaders', Subheaders);

  //---

  //Subheaders.$inject = [];

  function Subheaders() {

    var directive = {
      restrict: 'E',
      scope: {},

      controller: 'SubheadersCtrl',
      controllerAs: 'vm',
      bindToController: true,

      link: linkFn
    };

    return directive;

    //---

    function linkFn(scope, element, attrs, ctrl) {

      angular.element(element).children('.subheader-container').bind('scroll', function(e) {
        ctrl.onScroll(e);
      });

    }
  }

  //---

  module.controller('SubheadersCtrl', SubheadersCtrl);

  //---

  SubheadersCtrl.$inject = ['$element', '$timeout'];

  function SubheadersCtrl($element, $timeout) {
    var vm = this;

    var _subheaders = [];

    var ele;
    var active;

    vm.addSubheader = addSubheader;
    vm.onScroll = onScroll;
    vm.setActive = setActive;

    //---

    function addSubheader(subheader) {
      ele = angular.element('<div/>');
      ele.addClass('subheader-title subheader-title-header');
      ele.css({
        'top': '0px',
        'margin-left': '0px'
      });
      ele.html(subheader.attr('title'));
      $element.prepend(ele);

      _subheaders.push({
        header: ele,
        content: angular.element(subheader[0])
      });

      if(_subheaders.length == 1) {
        vm.setActive(0);
      }
    }

    //---

    function onScroll(e) {
      angular.forEach(_subheaders, function(val, key) {
        if(!val.content.hasClass('active') && val.content.offset().top < 52) {
          active.header.css({
            '-webkit-transform': 'translate3d(0px, '+(val.content.offset().top - 50)+'px, 0px)'
          });

          if((val.content.offset().top - 52) < -36) {
            vm.setActive(key);
          }
        }
      });
    }

    //---

    function setActive(index) {
      var idx = _subheaders.indexOf(active);
      if(idx > -1) {
        _subheaders[idx].content.removeClass('active');
        _subheaders[idx].header.removeClass('active');
      }

      _subheaders[index].content.addClass('active');
      _subheaders[index].header.addClass('active');

      active = _subheaders[index];

      _subheaders[index] = active;

      active.header.css({
        '-webkit-transform': 'translate3d(0px, 0px, 0px)'
      });
    }
  }

});