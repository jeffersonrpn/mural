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

  ProfileCtrl.$inject = ['Auth', 'Users'];

  /*jshint latedef: nofunc */
  function ProfileCtrl(Auth, Users) {
    var vm = this;
    vm.user = {};

    function init() {
      var user = Auth.getUser();
      Users.get({id: user.id}, function(response) {
        vm.user = response;
      });
    }
    init();

  }
})();
