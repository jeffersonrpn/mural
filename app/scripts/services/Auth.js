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

  Auth.$inject = ['$cookies', 'Users'];

  /*jshint latedef: nofunc */
  function Auth($cookies, Users) {
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
            successCallback();
          } else {
            errorCallback();
          }
        });
        return;
      },
      logout: function(successCallback) {
        $cookies.remove('user');
        successCallback();
      }
    };
    return factory;
  }
})();
