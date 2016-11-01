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

  UserPostsCtrl.$inject = ['Posts', 'Auth'];

  /*jshint latedef: nofunc */
  function UserPostsCtrl(Posts, Auth) {
    var vm = this;
    vm.posts = [];
    vm.newPost = {};
    vm.totalPosts = 0;
    vm.selectedPost = {};
    vm.isLoading = false;
    vm.createNewPost = createNewPost;
    vm.isSelected = isSelected;
    vm.selectPost = selectPost;
    vm.toggleComments = toggleComments;

    function init() {
      var user = Auth.getUser();
      vm.isLoading = true;
      Posts.userPosts({id: user.id}, function(response) {
        var posts = response;
        vm.totalPosts = posts.length;
        posts.forEach(function(post) {
          Posts.comments({id: post.id}, function(response) {
            post.totalComments = response.length + (Math.floor(Math.random() * (10 - 1)) + 1);
            post.comments = response;
            post.isNew = false;
            vm.isLoading = false;
            vm.posts.push(post);
          });
        });
      });
      reset();
    }
    init();

    function createNewPost(form) {
      var newPost = angular.copy(vm.newPost);
      vm.posts.push(newPost);
      reset(form);
    }

    function isSelected(post) {
      return (post.id === vm.selectedPost.id);
    }

    function selectPost(post) {
      vm.selectedPost = post;
    }

    function toggleComments(post) {
      if (isSelected(post)) {
        vm.selectedPost = {};
      } else {
        selectPost(post);
      }
    }

    function reset(form) {
      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }
      vm.newPost = {
        title: "",
        body: "",
        totalComments: 0,
        comments: [],
        isNew: true
      };
      $('#newPostDialog').modal('hide');
    }

  }
})();
