'use strict';

/**
 * @ngdoc filter
 * @name muralApp.filter:mrFirstname
 * @function
 * @description
 * # mrFirstname
 * Filter in the muralApp.
 */
angular.module('muralApp')
  .filter('mrFirstname', function () {
    return function (input) {
      var words = input.split(" ");
      return words[0];
    };
  });
