'use strict';

describe('Controller: DramasCtrl', function () {
  
  beforeEach(module('secondLead'));

  var DramasCtrl,
  	scope;
  	mockUserModel

  beforeEach(inject(function ($controller, $rootScope){
  	scope = $rootScope.$new();
  	DramasCtrl = $controller('DramasCtrl', {
  	  $scope: scope
  	});
  }));

  it('should attach a list of dramas to the scope', function () { 
  	expect(scope.items.length).not.toBe(0);
  });



});