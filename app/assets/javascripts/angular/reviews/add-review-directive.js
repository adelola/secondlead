angular.module('secondLead')
  .directive('addReview', [ 'ReviewModel', 'store',function (ReviewModel, store){
    
    return {
	  restrict : 'E',
	  templateUrl : 'add-review.html',
	  scope : {
	    drama : '='
	  },
	  link : function (scope, elem, attrs){
		var dramaId = scope.drama.dramaId;
		var currentUser = store.get('user');
	  	
	  	var initialize = function () {
	  	  ReviewModel.find(dramaId, currentUser.id).then(function (result){
	  	  	if (result.errors) {
	  	  	  scope.review = "";
	  	  	} else {
		  	scope.review= result.review.body;
		  	scope.reviewId = result.review.id;
		  	}
		  })
	  	};
	  	initialize();
	  
		scope.addReview = function (newReview){
		  	ReviewModel.create(dramaId,currentUser.id, newReview).then(function (result){
		  	  scope.review = result.review.body;
		  	  scope.reviewId = result.review.id;
		  	});
		};

		scope.reset = function () {
		  	ReviewModel.delete(dramaId, scope.reviewId);
		  	scope.review = '';
		  	scope.reviewId = '';
		};

		scope.updateReview = function (review){
		  ReviewModel.update(dramaId, scope.reviewId, review);
		  scope.review = review;
		};

	  }
		
	};
	
  }]);