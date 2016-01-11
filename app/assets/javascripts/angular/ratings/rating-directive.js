angular.module('secondLead')
  .directive('dramaRating', [ 'RatingModel', 'store',function(RatingModel, store) {
    
    return {
	  restrict : 'A',
	  templateUrl : 'rating.html',
	  scope : {
	    ratingValue : '=',
	    ratingId: '=',
	    drama : '=',
	    max : '='
	  },
	  link : function(scope, elem, attrs) {
		var dramaId = scope.drama.dramaId;
		var currentUser = store.get('user');
	  	
	  	var initialize = function(){
	  	  RatingModel.find(dramaId, currentUser.id).then(function(result){
	  	  	if (result.errors) {
	  	  	  scope.ratingValue = -1;
	  	  	} else {
		  	scope.ratingValue= result.weight;
		  	scope.ratingId = result.id;
		  	}
		  })
	  	};

	  	if(currentUser){
	  	  initialize();
	  	};

	  	var updateHearts = function() {
		  scope.hearts = [];
			for ( var i = 0; i < scope.max; i++) {
			  scope.hearts.push({
			  filled : i < scope.ratingValue
			  });
			}
		};

		var updateRating = function(newWeight){
		  if(scope.ratingId){
		  	RatingModel.update(dramaId, scope.ratingId, newWeight)
		  }
		  else {
		  	RatingModel.create(currentUser.id, dramaId, newWeight);
		  	initialize();
		  };
		};
				
		scope.toggle = function(index) {
		  if(currentUser){
		    scope.ratingValue = index + 1;
		    updateRating(index + 1);
		    updateHearts();
		  };
		};

		scope.reset = function(){
		  if(currentUser){
		  	RatingModel.delete(dramaId, scope.ratingId);
		  	scope.ratingValue = 0;
		  	scope.ratingId = '';
		  }
		};
				
		scope.$watch('ratingValue',
		  function(oldVal, newVal) {
			if (newVal) {
			  updateHearts();
			}
		  }
		);		
	  }
		
	};
	
  }]);