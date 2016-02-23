angular.module('myIs', ['ionic', 'myIs.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    views: {
      '@': {
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      }
    }
  })

  .state('app.headlines', {
    url: '/headlines',
    views: {
      'content@app': {
        templateUrl: 'templates/headlines.html',
        controller: 'HeadlinesCtrl as hlCtrl'
      }
    }
  })

  .state('headline', {
    url: '/headline',
    params: {headline: null},
    controller: 'SingleHLCtrl as shlCtrl',
    templateUrl: 'templates/headline.html'
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/headlines');
});
