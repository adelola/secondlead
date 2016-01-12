angular.module('secondLead')
  .directive('deleteList', [ 'ListModel' , function(ListModel){ 
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
          console.log(scope.list);
  	  	  ListModel.delete(scope.list.id);
  	  	  scope.removeItem(scope.list);
  	  	};
  	  }
  	  
  	};

  }])