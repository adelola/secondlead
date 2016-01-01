angular.module('secondLead')
  .directive('deleteDrama', function(){
  	return {
  	  restrict: 'E',
  	  scope: {
  	  	drama: "="
  	  },
  	  replace: true,
  	  link: function(scope, element, attrs){

  	  },
  	  controller: function($scope){
  	  	console.log($scope.drama);
  	  }
  	}


  })
