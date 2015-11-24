App.factory('Casts', ['$resource',function($resource){
 return $resource('/casts.json', {},{
 query: { method: 'GET', isArray: true },
 create: { method: 'POST' }
 })
}]);

// App.controller('castsCtrl', function() {
//   var cast = this;
//    cast.name = 'Your mom!';
// });

App.controller("castsCtrl", ['$scope', '$resource', 'Casts', 'Cast', '$name' function($scope, $resource, Casts, Cast, $name) {
  $scope.casts = Casts.query();
}]);