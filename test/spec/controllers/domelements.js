'use strict';

describe('Controller: DomelementsCtrl', function () {

  // load the controller's module
  beforeEach(module('simApp'));

  var DomelementsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DomelementsCtrl = $controller('DomelementsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
