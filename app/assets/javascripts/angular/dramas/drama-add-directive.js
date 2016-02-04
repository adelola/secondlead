angular.module('secondLead')
  .directive('addDrama', ['DramaModel', '$mdToast', function (DramaModel, $mdToast) {
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
      openToast = function($event) {
        $mdToast.show({
            template: '<md-toast class="md-toast"><i class="fa fa-check"></i>Added to list!</md-toast>',
            hideDelay: 2000,
            position: 'right'
        });
      };
	  	scope.addToList = function (list, drama) {
	  	  DramaModel.add(scope.user, list, drama);
	  	  scope.selectedList = "";
        openToast();
	  	};
	  }
	}
}])