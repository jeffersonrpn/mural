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
    var factory = $resource(RESTAPI.url+'posts/:id', {
      id: '@id'
    }, {
      comments: {
        method: 'GET',
        isArray: true,
        url: RESTAPI.url+'posts/:id/comments'
      },
      userPosts: {
        method: 'GET',
        isArray: true,
        url: RESTAPI.url+'posts?userId=:id'
      }
    });
    return factory;
  }
})();
