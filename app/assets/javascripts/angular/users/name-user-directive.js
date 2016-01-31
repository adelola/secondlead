(function(){
'use strict';

angular.module('secondLead')
  .directive('nameUser', ['UserModel',function (UserModel){
    
    return {
	  restrict : 'A',
	  template : '<span> {{userName}}</span>',
	  scope : {
	    userId : '=',
	  },
	  link: function (scope, elem, attrs){
	  	UserModel.getOne(scope.userId).then(function (result){
	  		scope.userName = (result.user.username);
	  	})
	  }
	}
  }])

})();
