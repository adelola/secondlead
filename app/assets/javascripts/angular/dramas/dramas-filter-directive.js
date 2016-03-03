angular.module('secondLead')
  .directive('dramasFilter', ['DramaModel', function (DramaModel) {
  	return {
  	  restrict: 'E',
  	  templateUrl:'filter-bar.html',
  	  scope: {
        items: "="
  	  },
	  link: function (scope, element, attrs) {
      scope.genreItems = [
        {name: "Action", value: "action", ticked: false},
        {name: "Comedy", value: "comedy", ticked: false}, 
        {name: "Historical", value: "historical", ticked: false}, 
        {name: "Idol", value: "idol", ticked: false}, 
        {name: "Melodrama", value: "melodrama", ticked: false}, 
        {name: "Mystery", value: "mystery", ticked: false}, 
        {name: "Supernatural", value: "supernatural", ticked: false}, 
        {name: "Thriller", value: "thriller", ticked: false} 
      ];

      scope.countryItem = [
        {name: "China", ticked: false}, 
        {name: "Japan", ticked: false}, 
        {name: "Korea", ticked: false}, 
        {name: "Taiwan", ticked: false}
      ];

      scope.selectedGenres = [];
      scope.selectedCountry = [];

      scope.filter = function () {
        event.preventDefault();
        DramaModel.getSome(scope.selectedGenres, scope.selectedCountry)
          .then( function(result){
            scope.items = result.dramas; 
        });
        
      };
	  }
	}
}])