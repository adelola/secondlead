angular.module('secondLead')
  .directive('dramaFilter', ['DramaModel', function (DramaModel) {
  	return {
  	  restrict: 'E',
  	  templateUrl:'filter-bar.html',
  	  scope: {
  	  
  	  },
	  link: function (scope, element, attrs) {
      scope.genreItems = [
        {name: "Action", ticked: false},
        {name: "Comedy", ticked: false}, 
        {name: "Historical", ticked: false}, 
        {name: "Idol", ticked: false}, 
        {name: "Melodrama", ticked: false}, 
        {name: "Mystery", ticked: false}, 
        {name: "Supernatural", ticked: false}, 
        {name: "Thriller", ticked: false} 
      ];

      scope.countryItems = [
        {name: "China", ticked: false}, 
        {name: "Japan", ticked: false}, 
        {name: "Korea", ticked: false}, 
        {name: "Taiwan", ticked: false}
      ];

      scope.selectedGenres = [];
      scope.selectedCountries = [];
	  }
	}
}])