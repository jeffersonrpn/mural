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
      'ui.router'
    ])
    .constant('RESTAPI', {
      url: 'https://jsonplaceholder.typicode.com/'
    })
    .config(routeConfig);

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    /*jshint latedef: nofunc */
    function routeConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('main', {
          url: "/",
          templateUrl: "views/main.html",
          controller: "MainCtrl",
          controllerAs: "ctrl"
        })
        .state('post', {
          url: "/post/:id",
          templateUrl: "views/post.html",
          controller: "PostCtrl",
          controllerAs: "ctrl"
        })
        .state('about', {
          url: "/about",
          templateUrl: "views/about.html",
          controller: "AboutCtrl",
          controllerAs: "ctrl"
        });
      $urlRouterProvider.otherwise('/');
    }
})();
