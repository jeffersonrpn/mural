(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name muralApp
   * @description
   * # muralApp
   *
   * Main module of the application.
   */
  angular
    .module('muralApp', [
      'ngAnimate',
      'ngAria',
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ngTouch',
      'ui.router',
      'jcs-autoValidate'
    ])
    .constant('RESTAPI', {
      url: 'https://jsonplaceholder.typicode.com/'
    })
    .config(routeConfig)
    .run(runConfig);

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    runConfig.$inject = ['$rootScope', '$state', 'Auth'];

    /*jshint latedef: nofunc */
    function routeConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('main', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'ctrl',
          data: { requiredLogin: true }
        })
        .state('login', {
          url: '/login',
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl',
          controllerAs: 'ctrl'
        })
        .state('post', {
          url: '/post/:id',
          templateUrl: 'views/post.html',
          controller: 'PostCtrl',
          controllerAs: 'ctrl',
          data: { requiredLogin: true }
        })
        .state('about', {
          url: '/about',
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'ctrl'
        });
      $urlRouterProvider.otherwise('/');
    }

    /*jshint latedef: nofunc */
    function runConfig($rootScope, $state, Auth) {
      $rootScope.$state = $state;
      $rootScope.currentUser = Auth.getUser();
      $rootScope.$on('$stateChangeStart', function (event, toState) {
        var requiredLogin = false;
        // check if this state need login
        if (toState.data && toState.data.requiredLogin) {
          requiredLogin = true;
        }
        // if yes and if this user is not logged in, redirect him to login page
        if (requiredLogin && !Auth.isAuthenticated()) {
          event.preventDefault();
          $state.go('login');
        }
      });
    }
})();
