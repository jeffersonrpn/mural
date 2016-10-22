(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name muralApp.controller:PostCtrl
   * @description
   * # PostCtrl
   * Controller of the muralApp
   */
  angular.module('muralApp')
    .controller('PostCtrl', PostCtrl);

  PostCtrl.$inject = ['Posts', '$stateParams'];

  /*jshint latedef: nofunc */
  function PostCtrl(Posts, $stateParams) {
    var vm = this;

    vm.post = Posts.get({id: $stateParams.id}, function success() {
      vm.post.comments = Posts.comments({id: $stateParams.id});
    });

  }
})();
