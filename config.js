require({
  urlArgs: 'bust='+(new Date()).getTime(),

  // libraries dependencies (fallback support)
  paths: {

    angular: [
      './vendor/angular.min'
    ],

    angularTouch: [
      './vendor/angular-touch.min'
    ],

    angularResource: [
      './vendor/angular-resource.min'
    ],

    uiRouter: [
      './vendor/angular-ui-router.min'
    ],

    angularAnimate: [
      './vendor/angular-animate.min'
    ],

    angularAria: [
      './vendor/angular-aria.min'
    ],

    angularMaterial: [
      './vendor/angular-material.min'
    ],

    moment: [
      './vendor/moment.min'
    ]

  },

  // define js scripts dependencies
  shim: {

    'angular': {
      exports: 'angular'
    },

    'angularTouch': {
      deps: ['angular']
    },

    'angularResource': {
      deps: ['angular']
    },

    'uiRouter': {
      deps: ['angular']
    },

    'angularAnimate': {
      deps: ['angular']
    },

    'angularAria': {
      deps: ['angular']
    },

    'angularMaterial': {
      deps: ['angularAnimate', 'angularAria']
    }

  },

  priority: [
    'angular'
  ],

  deps: ['./app']

});
