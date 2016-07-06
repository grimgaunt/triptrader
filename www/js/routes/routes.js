'use strict';

angular.module('triptrader')


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

   .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('app.details', {
      url: '/details',
      views: {
        'menuContent': {
          templateUrl: 'templates/details.html',
          controller: 'detailsCtrl'
        }
      }
    })
    .state('app.main', {
      url: '/main',
      views: {
        'menuContent': {
          templateUrl: 'templates/main.html',
          controller: 'mainCtrl'
        }
      }
    });

  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
});
