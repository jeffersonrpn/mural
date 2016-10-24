(function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name muralApp.directive:mrNavbar
   * @description
   * # mrNavbar
   */
  angular.module('muralApp')
    .directive('mrNavbar', mrNavbar);

  /*jshint latedef: nofunc */
  function mrNavbar() {
    return {
      restrict: 'E',
      templateUrl: 'views/directives/mr-navbar.html',
      scope: {},
      controller: mrNavbarController,
      controllerAs: 'ctrl',
      bindToController: {
        show: '=',
        user: '='
      }
    };
  }

  mrNavbarController.$inject = ['$state', 'Auth'];

  function mrNavbarController($state, Auth) {
      var vm = this;
      vm.doLogout = doLogout;

      function doLogout() {
        Auth.logout(function() {
          $state.go('login');
        });
      }
  }

})();
