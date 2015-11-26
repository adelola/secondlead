// App.factory('Casts', ['$resource',function($resource){
//  return $resource('/casts.json', {},{
//  query: { method: 'GET', isArray: true },
//  create: { method: 'POST' }
//  })
// }]);

// App.controller("castsCtrl", ['$scope', '$resource', 'Casts', 'Cast', '$name' function($scope, $resource, Casts, Cast, $name) {
//   $scope.casts = Casts.query();
// }]);

// App.controller('castsCtrl', ['$scope', function($scope) {
//     $scope.casts = ['hi', 'world'];
// }]);

// App.factory('Casts', ['$resource',function($resource){
//   return $resource('/casts.json', {},{
//   query: { method: 'GET', isArray: true },
//   create: { method: 'POST' }
//   })
// }]);

App.controller("castsCtrl", ['$scope', '$resource', 'Casts', 'Cast', function($scope, $resource, Casts, Cast) {
  $scope.casts = Casts.query(); //it's getting user collection
}]);