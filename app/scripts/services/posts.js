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
    return $resource(RESTAPI.url+'posts/:id');
  }
})();
