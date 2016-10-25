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

  MainCtrl.$inject = ['Posts', 'Auth', '$state'];

  /*jshint latedef: nofunc */
  function MainCtrl(Posts, Auth, $state) {
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
