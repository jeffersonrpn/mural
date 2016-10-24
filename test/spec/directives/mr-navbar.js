'use strict';

describe('Directive: mrNavbar', function () {

  // load the directive's module
  beforeEach(module('muralApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mr-navbar></mr-navbar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mrNavbar directive');
  }));
});
