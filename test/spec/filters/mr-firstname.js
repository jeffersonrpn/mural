'use strict';

describe('Filter: mrFirstname', function () {

  // load the filter's module
  beforeEach(module('muralApp'));

  // initialize a new instance of the filter before each test
  var mrFirstname;
  beforeEach(inject(function ($filter) {
    mrFirstname = $filter('mrFirstname');
  }));

  it('should return the input prefixed with "mrFirstname filter:"', function () {
    var text = 'angularjs';
    expect(mrFirstname(text)).toBe('mrFirstname filter: ' + text);
  });

});
