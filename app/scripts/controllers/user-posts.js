(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name muralApp.controller:UserPostsCtrl
   * @description
   * # UserPostsCtrl
   * Controller of the muralApp
   */
  angular.module('muralApp')
    .controller('UserPostsCtrl', UserPostsCtrl);

  UserPostsCtrl.$inject = ['Posts', 'Auth', '$state'];

  /*jshint latedef: nofunc */
  function UserPostsCtrl(Posts, Auth, $state) {
    var vm = this;
    vm.posts = [];
    vm.getComments = getComments;

    function init() {
      Posts.query(function(response) {
        vm.posts = response;
        vm.posts.comments = [];
      });
    }
    init();

    function getComments(post) {
      Posts.comments({id: post.id}, function(response) {
        // post
      });
    }

  }
})();
