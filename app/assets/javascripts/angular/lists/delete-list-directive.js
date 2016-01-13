angular.module('secondLead')
  .directive('deleteList', [ 'ListModel','$uibModal' , function(ListModel, $uibModal){ 
  	return {
  	  restrict: 'E',
  	  template:'<button type="button" '
                + 'class="close" ng-click="delete()">'
                + '<i class="fa fa-trash-o"></i>'
                +'</button>' ,
  	  scope: {
  	  	list: "=",
  	  	removeItem: "&"
  	  },
  	  replace: true,
  	  link: function(scope, element, attributes){
  	  	scope.delete = function(){
          var modalInstance = $uibModal.open({
            animation: scope.animationsEnabled,
            templateUrl: 'warning.html',
            controller: 'WarningModalCtrl',
            size: 'sm'
          });

          modalInstance.result.then(function(result) {
            if (result.confirmation === true){
    	  	    ListModel.delete(scope.list.id);
    	  	    scope.removeItem(scope.list);
            }
          });

  	  	};
  	  }
  	  
  	};

  }])