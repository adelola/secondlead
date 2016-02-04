angular.module('secondLead')
  .directive('addDrama', ['DramaModel', function (DramaModel) {
  	return {
  	  restrict: 'E',
  	  templateUrl:'add-drama.html',
  	  scope: {
  	  	drama: "=",
  	  	userLists: "=",
  	  	user: "@",
  	  	selectedList:"@"
  	  },
	  link: function (scope, element, attrs) {
	  	scope.addToList = function (list, drama) {
	  	  DramaModel.add(scope.user, list, drama);
	  	  scope.selectedList = "";
	  	};
	  }
	}
}])