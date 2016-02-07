(function(){

  'use strict';

  angular.module('secondLead.common')
	.directive('autoSearch', ['$http', 'SearchService', '$timeout', function ($http, SearchService, $timeout){
	  return {
	    restrict: 'EA',
	    scope: {
	      query: "=",
	      showSearch: "&"
	    },
        template: '<input id="search-input" ng-model="query" type="text" placeholder="Search" ng-keyup="keyPressed()" />',
        link: function (scope, elem, attrs){
          scope.lastSearchTerm = null;
	      scope.searchTimer = null;
	      scope.pause = 500;
	      scope.minLength = 3;
	      scope.query = null;

	      var isNewSearchNeeded = function (newTerm, oldTerm){
	        return newTerm.length >= scope.minLength && newTerm != oldTerm
	      };

	      scope.processResults = function (users, casts, dramas){
			scope.results = [];
			SearchService.setUsers(users);
			SearchService.setCasts(casts);
	        SearchService.setDramas(dramas);
	      };

          scope.startSearch = function(str) {
            if (str.length >= scope.minLength) {
              $http.get("/search", {params: {q: str}}).
                success(function (responseData, status, headers, config){
                  scope.processResults(responseData["users"],responseData["casts"], responseData["dramas"]);
                  scope.showSearch();
                }).
                error(function (data, status, headers, config){
                  console.log("error");
                });
                
            }
          };

          scope.keyPressed = function (){
            if (isNewSearchNeeded(scope.query, scope.lastSearchTerm)) {
              scope.lastSearchTerm = scope.query
              if (scope.searchTimer) {
                $timeout.cancel(scope.searchTimer);
              }
              scope.searchTimer = $timeout(function() {
                scope.startSearch(scope.query);
                }, scope.pause);
              } else {
                event.preventDefault();
              }
            };
	      };

	    };
	}]);

})();