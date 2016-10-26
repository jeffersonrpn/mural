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

  LoginCtrl.$inject = ['$state', '$timeout', 'Auth'];

  /*jshint latedef: nofunc */
  function LoginCtrl($state, $timeout, Auth) {
    var vm = this;
    vm.username = '';
    vm.formError = false;
    vm.isLoading = false;
    vm.doLogin = doLogin;

    function doLogin() {
      vm.formError = false;
      vm.isLoading = true;
      Auth.authenticate(vm.username, function() {
        $state.go('main');
      }, function() {
        console.log("Auth error");
        vm.isLoading = false;
        $timeout(function() {
          vm.formError = true;
        }, 500);
      });
    }

  }
})();
