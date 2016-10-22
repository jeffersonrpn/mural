(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name muralApp.Posts
   * @description
   * # Posts
   * Factory in the muralApp.
   */
  angular.module('muralApp')
    .factory('Posts', Posts);

  Posts.$inject = ['RESTAPI','$resource'];

  /*jshint latedef: nofunc */
  function Posts(RESTAPI, $resource) {
    var Posts = $resource(RESTAPI.url+'posts/:id', {
      id: '@id'
    }, {
      comments: {
        method: 'GET',
        isArray: true,
        url: RESTAPI.url+'posts/:id/comments'
      }
    });
    return Posts;
  }
})();
