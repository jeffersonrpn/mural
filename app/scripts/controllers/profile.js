(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name muralApp.controller:ProfileCtrl
   * @description
   * # ProfileCtrl
   * Controller of the muralApp
   */
  angular.module('muralApp')
    .controller('ProfileCtrl', ProfileCtrl);

  ProfileCtrl.$inject = ['$timeout', 'Auth', 'Users'];

  /*jshint latedef: nofunc */
  function ProfileCtrl($timeout, Auth, Users) {
    var vm = this;
    vm.user = {};
    vm.isLoading = false;

    function init() {
      var user = Auth.getUser();
      vm.isLoading = true;
      Users.get({id: user.id}, function(response) {
        $timeout(function() {
          vm.user = response;
          vm.isLoading = false;
        }, 2000);
      });
    }
    init();

  }
})();
