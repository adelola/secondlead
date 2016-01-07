angular.module('secondLead')
  .directive('deleteDrama', [ 'DramaModel' , function(DramaModel){ 
  	return {
  	  restrict: 'E',
  	  templateUrl:'delete-drama.html' ,
  	  scope: {
  	  	drama: "=",
  	  	list: "@",
  	  	user: "@",
  	  	remove: "&"
  	  },
  	  replace: true,
  	  link: function(scope, element, attributes){
  	  	scope.delete = function(user, list, drama){
  	  	  DramaModel.delete(scope.user,scope.list,scope.drama.id);
  	  	};
  	  }
  	  
  	};

  }])
