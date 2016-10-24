(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name muralApp.Auth
   * @description
   * # Auth
   * Factory in the muralApp.
   */
  angular.module('muralApp')
    .factory('Auth', Auth);

  Auth.$inject = ['$rootScope', '$cookies', 'Users'];

  /*jshint latedef: nofunc */
  function Auth($rootScope, $cookies, Users) {
    var factory = {
      isAuthenticated: function() {
        var user = $cookies.getObject('user');
        return (user && user.isAuthenticated === true);
      },
      authenticate: function(username, successCallback, errorCallback) {
        Users.query({username: username}, function(data) {
          var user = data[0];
          if (user && user.email) {
            $cookies.putObject('user', {
              'id': user.id,
              'name': user.name,
              'email': user.email,
              'username': user.username,
              'isAuthenticated': true
            });
            $rootScope.currentUser = $cookies.getObject('user');
            successCallback();
          } else {
            errorCallback();
          }
        });
        return;
      },
      logout: function(successCallback) {
        $cookies.remove('user');
        $rootScope.currentUser = {};
        successCallback();
      },
      getUser: function() {
        return $cookies.getObject('user');
      }
    };
    return factory;
  }
})();
