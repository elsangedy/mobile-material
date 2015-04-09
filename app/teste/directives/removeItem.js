define(function(require) {
  'use strict';

  var module = require('../module');

  module.directive('removeItem', RemoveItem);

  //---

  RemoveItem.$inject = ['$swipe'];

  function RemoveItem($swipe) {

    var directive = {
      template: templateFn,
      transclude: true,
      link: linkFn
    };

    return directive;

    //---

    function linkFn(scope, ele, attrs, ctrl) {

      var events = {
        start: start,
        move: move,
        end: end,
        cancel: end
      };

      var startX,
          width,
          startAt;

      var item = angular.element(ele[0].querySelector('.list-row'));

      ele.css('width', '100%');

      $swipe.bind(item, events);

      //---

      function start(coords) {
        item.css('transition', 'none');

        startX = coords.x;
        width = item.width();
        var d = new Date();
        startAt = d.getTime();
      }

      //---

      function move(coords) {
        var diff = (coords.x - startX > 0) ? (coords.x - startX) : ((coords.x - startX) / (-1)),
            a = 250 - diff,
            b = a * 100,
            c = (b / 250).toFixed(0);

        if(c < 20)
          c = '0.20';
        else if(c > 100)
          c = '1';
        else
          c = '0.'+c;

        item.css('opacity', c);
        item.css('transform', 'translateX(' + (coords.x - startX) + 'px)');
      }

      //---

      function end(coords) {
        item.css('transition', 'all 0.3s linear');
        item.css('opacity', '1');

        var d = new Date();
        var diff = (coords.x - startX > 0) ? (coords.x - startX) : ((coords.x - startX) / (-1));

        if(((width / 2) < diff) || ((d.getTime() - startAt < 250) && (diff> 50))) {
          item.remove();
        } else {
          item.css('transform', 'translateX(0px)');
        }
      }

    }

    //---

    function templateFn(element, attr) {
      return [

        '<div style="width:100%;background-color:#333">',
        '<div class="p+" style="width:100%;height:100%;position:absolute">',
        '<span>Removido</span>',
        '<strong style="float:right">Desfazer</strong>',
        '</div>',
        '<div class="list-row p+" style="background-color:#fff" ng-transclude></div>',
        '<p></p>',
        '</div>'

      ].join('');
    }
  }

});