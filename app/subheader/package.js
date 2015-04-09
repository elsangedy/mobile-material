define(function(require) {
  'use strict';

  var module = require('./module');
  require('./controller');
  require('./directives/subheaders');
  require('./directives/subheader');
  require('./states');

  return module;

});
