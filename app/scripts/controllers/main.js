(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name muralApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the muralApp
   */
  angular.module('muralApp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['Posts'];

  /*jshint latedef: nofunc */
  function MainCtrl(Posts) {
    var vm = this;

    vm.posts = Posts.query();

  }
})();
