(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name muralApp.controller:LoginCtrl
   * @description
   * # LoginCtrl
   * Controller of the muralApp
   */
  angular.module('muralApp')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$state', 'Auth'];

  /*jshint latedef: nofunc */
  function LoginCtrl($state, Auth) {
    var vm = this;

    vm.username = '';
    vm.doLogin = doLogin;

    function doLogin() {
      Auth.authenticate(vm.username, function() {
        $state.go('main');
      }, function() {
        console.log("Auth error");
      });
    }

  }
})();
