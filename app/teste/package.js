define(function(require) {
  'use strict';

  var module = require('./module');
  require('./controller');
  require('./directives/removeItem');
  require('./states');

  return module;

});
