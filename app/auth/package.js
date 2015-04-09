define(function(require) {
  'use strict';

  var module = require('./module');
  require('./controllers/login');
  require('./states');

  return module;

});
