(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name muralApp.Users
   * @description
   * # Users
   * Factory in the muralApp.
   */
  angular.module('muralApp')
    .factory('Users', Users);

  Users.$inject = ['RESTAPI','$resource'];

  /*jshint latedef: nofunc */
  function Users(RESTAPI, $resource) {
    return $resource(RESTAPI.url+'users/:id');
  }
})();
