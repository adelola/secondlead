App.controller('castsCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('/casts.json').success(function(data) {
      $scope.casts = data;
    });
  }]);